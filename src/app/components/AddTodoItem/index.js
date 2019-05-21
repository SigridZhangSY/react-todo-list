import React, { PureComponent } from 'react';
import './index.css';

export default class AddTodoItem extends PureComponent {

  handleAddItem = (event) => {
    const {addItem} = this.props
    event.preventDefault()
    addItem(this.refs.itemContent.value)
  }

  render() {
    return (
      <form onSubmit={this.handleAddItem}>
        <div className="inline-input">
          <input type="text" ref="itemContent" />
          <button type="submit" className="btn">Add</button>
        </div>
      </form>
    )
  }
}