import React, { PureComponent } from 'react'
import './index.css'
import TodoListItem from '../TodoListItem/index'
import AddTodoItem from '../AddTodoItem/index'

export default class TodoList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
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
  }

  addItem = (itemContent) => {

    let list = this.state.list

    const newList = list.concat([
      {
        id: list.length + 1,
        content: itemContent
      }
    ])

    this.setState({ ...this.state, list: newList})

  }

  markAsDone = (itemId) => {
    const list = this.state.list
    const targetIndex = list.findIndex(item => item.id === itemId)
    if (targetIndex>0) {
      const target = list[targetIndex]
      const preHalf = list.slice(0, targetIndex)
      const nextHalf = list.slice(targetIndex+1, list.length)

      const newList = preHalf.concat([{...target, done:true}], nextHalf)
      this.setState({...this.state, list: newList})
    }
  }

  render() {
    return (
      <div className="wrapper">
        <h3>Todo List</h3>
        <ul className="list-content">
          {
            this.state.list.map(item => (
              <TodoListItem key={item.id}
                            item={item}
                            markAsDone={this.markAsDone}
              ></TodoListItem>
            ))
          }
        </ul>
        <AddTodoItem addItem={this.addItem}></AddTodoItem>
      </div>
    );
  };
}