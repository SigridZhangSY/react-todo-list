import React from 'react';
import './index.css';

const TodoListItem = (props) => {
  const {item} = props

  return (
    <li className={`list-item ${item.done ? 'done' : ''}`}>
      <p className="index">{item.id}</p>
      <p>{item.content}</p>
    </li>
  )
}

export default TodoListItem