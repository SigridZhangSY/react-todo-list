import React from 'react';
import './index.css';

const TodoListItem = (props) => {
  const {item, markAsDone} = props

  return (
    <li
      className={`list-item ${item.done ? 'done' : ''}`}
      onClick={() => markAsDone(item.id)}
    >
      <p className="index">{item.id}</p>
      <p>{item.content}</p>
    </li>
  )
}

export default TodoListItem