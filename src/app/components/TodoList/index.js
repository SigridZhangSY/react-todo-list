import React, { PureComponent } from 'react'
import './index.css'
import TodoListItem from '../TodoListItem/index'

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

  handleAddItem = (event) => {
    event.preventDefault()
    let list = this.state.list

    const newList = list.concat([
      {
        id: list.length + 1,
        content: this.refs.itemContent.value
      }
    ])

    this.setState({ ...this.state, list: newList})

  }



  render() {
    return (
      <div className="wrapper">
        <h3>Todo List</h3>
        <ul className="list-content">
          {
            this.state.list.map(item => (
              <TodoListItem key={item.id} item={item}></TodoListItem>
            ))
          }
        </ul>

        <form onSubmit={this.handleAddItem}>
          <div className="inline-input">
            <input type="text" ref="itemContent"/>
            <button type="submit" className="btn">Add</button>
          </div>
        </form>
      </div>
    );
  };
}