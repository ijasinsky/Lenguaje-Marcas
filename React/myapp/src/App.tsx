import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListo from './componentes/TodoListo';
import TodoButton from "./componentes/TodoButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TodoListo />
      <TodoButton />
      </header>
    </div>
  );
}

export default App;
