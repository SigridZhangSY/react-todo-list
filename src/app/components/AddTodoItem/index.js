import React, { PureComponent } from 'react';
import './index.css';

export default class AddTodoItem extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  onChange = (event) => {
    this.setState({
      ...this.state,
      content: event.target.value
    })
  }


  handleAddItem = (event) => {
    const {addItem} = this.props
    event.preventDefault()

    if (!!this.state.content) {
      addItem(this.state.content)

      this.setState({
        ...this.state,
        content: ''
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleAddItem}>
        <div className="inline-input">
          <input type="text" ref="itemContent" onChange={this.onChange} value={this.state.content} />
          <button type="submit" className="btn">Add</button>
        </div>
      </form>
    )
  }
}