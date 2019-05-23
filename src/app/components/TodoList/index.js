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
    if (targetIndex > 0) {
      const target = list[targetIndex]
      const preHalf = list.slice(0, targetIndex)
      const nextHalf = list.slice(targetIndex + 1, list.length)
      const newList = [target, ...preHalf, ...nextHalf]

      this.setState({...this.state, list: newList})
    }
  }

  changeListContent = (targetId, newListGenerator) => {
    const list = this.state.list
    const targetIndex = list.findIndex(item => item.id === targetId)
    if (targetIndex > 0) {
      const target = list[targetIndex]
      const preHalf = list.slice(0, targetIndex)
      const nextHalf = list.slice(targetIndex + 1, list.length)
      return newListGenerator(preHalf, nextHalf)(target)
    }
  }

  markAsDone = (itemId) => {
    const markTargetAsDone = (preHalf, nextHalf) =>
      (target) => preHalf.concat([{...target, done: true}], nextHalf)
    const newList = this.changeListContent(itemId, markTargetAsDone)
    this.setState({...this.state, list: newList})
  }

  removeItem = (itemId) => {
    const markTargetAsDone = (preHalf, nextHalf) =>
      (target) => preHalf.concat(nextHalf)
    const newList = this.changeListContent(itemId, markTargetAsDone)
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