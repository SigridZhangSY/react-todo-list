import React from 'react';
import './index.css';
import arrow from '../../../arrow-up.svg';

const TodoListItem = (props) => {
  const {item, markAsDone, removeItem, stickItem} = props

  return (
    <li
      className={"list-item"}
    >
      <p className={`content ${item.done ? 'done' : ''}`}
         onClick={() => markAsDone(item.id)}>{item.content}</p>
      <img className="sticky btn" src={arrow} alt="stick" onClick={() => stickItem(item.id)}/>
      <button className="delete btn" onClick={() => removeItem(item.id)}>&times;</button>
    </li>
  )
}

export default TodoListItem