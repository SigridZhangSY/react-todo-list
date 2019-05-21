import React, { PureComponent } from 'react';
import './index.css';

export default class TodoList extends PureComponent {
    
    render() {
        return (
            <div className="wrapper">
                <h3>Todo List</h3>
                <div className="list-content"></div>
            </div>
        );
    };
}