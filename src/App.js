import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PureList } from './app/components/PureList/index';
import TodoList from './app/components/TodoList/index';

function App() {
  const list = ['item1', 'item2', 'item3'];

  return (
    // <PureList list={list}></PureList>
    <TodoList></TodoList>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
