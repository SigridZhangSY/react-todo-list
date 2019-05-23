import React, { PureComponent } from 'react'
import './index.css'
import TodoListItem from '../TodoListItem/index'
import AddTodoItem from '../AddTodoItem/index'


// PureComponent在componentShouldUpdate中使用shallow comparison
// Component在componentShouldUpdate中使用deep comparision
export default class TodoList extends PureComponent {
  state = {
    list: [
      {
        id: 1,
        content: 'reading Refactor',
        done: true
      },
      {
        id: 2,
        content: 'yoga for 30min'
      }
    ]
  }

  findMaxExistedId = (list) => {
    return list.map(item => item.id).reduce((cur, item)=> cur > item ? cur : item, 0)
  }

  addItem = (itemContent) => {
    let list = this.state.list

    const newList = list.concat([
      {
        id: this.findMaxExistedId(this.state.list)+1,
        content: itemContent
      }
    ])

    this.setState({...this.state, list: newList})
  }

  stickItem = (targetId) => {
    const list = this.state.list
    const targetIndex = list.findIndex(item => item.id === targetId)

    if (targetIndex > -1) {
      const target = list[targetIndex]
      const preHalf = list.slice(0, targetIndex)
      const nextHalf = list.slice(targetIndex + 1, list.length)
      const newList = [target, ...preHalf, ...nextHalf]

      this.setState({...this.state, list: newList})
    }
  }

  markAsDone = (itemId) => {
    let newList = [...this.state.list]
    const targetIndex = newList.findIndex(item => item.id === itemId)

    if (targetIndex > -1) {
      newList[targetIndex].done = true;
      this.setState({...this.state, list: newList})
    }
  }

  removeItem = (itemId) => {
    const newList = this.state.list.filter(i => i.id !== itemId)
    this.setState({...this.state, list: newList})
  }

  render() {
    return (
      <div className="wrapper">
        <h3>Todo List</h3>
        <ul className="list-content">
          {
            this.state.list.map((item, index) => (
              <TodoListItem key={item.id}
                            item={item}
                            markAsDone={this.markAsDone}
                            removeItem={this.removeItem}
                            stickItem={this.stickItem}
              ></TodoListItem>
            ))
          }
        </ul>
        <AddTodoItem addItem={this.addItem}></AddTodoItem>
      </div>
    );
  };
}