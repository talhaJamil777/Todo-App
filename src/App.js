import React, { useState, useEffect, useRef } from 'react';
import './component/style.css';
import Header from './component/header';
import TodoItem from './component/todoitem';
import Button from './component/button';
import TodoContext from './component/TodoContext';

function App() {
  const [todos, setTodos] = useState(['React', 'PHP', 'CSS']);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setInput('');
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
  const saved = JSON.parse(localStorage.getItem('todos')) || [];
  setTodos(saved);
  }, []);

  useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);



  return (
    <TodoContext.Provider value={{ todos, setTodos, deleteTodo }}>
      <div className='todo-container'>
        <Header title='Todo App' />
        <input
          className="todo-input"
          placeholder="Add Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
        />
        <Button onClick={addTodo} />
        <ul>
          {todos.map((todo, index) => (
            <TodoItem key={index} text={todo} index={index} />
          ))}
        </ul>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
