import React from 'react';
import './index.css';

const TodoListItem = (props) => {
  const {item, markAsDone, removeItem} = props

  return (
    <li
      className={"list-item"}
    >
      <p className={`content ${item.done ? 'done' : ''}`}
         onClick={() => markAsDone(item.id)}>{item.content}</p>
      <button onClick={() => removeItem(item.id)}>&times;</button>
    </li>
  )
}

export default TodoListItem