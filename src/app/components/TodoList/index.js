import React, { PureComponent } from 'react';
import './index.css';

export default class TodoList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          id: 1,
          content: 'reading Refactor'
        },
        {
          id: 2,
          content: 'yoga for 30min'
        }
      ]
    }
  }

  render() {
    return (
      <div className="wrapper">
        <h3>Todo List</h3>
        <ul className="list-content">
          {
            this.state.list.map(item => (
              <li className="list-item" key={item.id}>
                <p className="index">{item.id}</p>
                <p>{item.content}</p>
              </li>
            ))
          }
        </ul>
      </div>
    );
  };
}