import React, { useState, useEffect, useRef } from 'react';
import './component/style.css';
import Header from './component/header';
import TodoItem from './component/todoitem';
import Button from './component/button';
import { TodoContext, CheckedContext } from './component/TodoContext';

function App() {
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState([]);
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const savedChecked = JSON.parse(localStorage.getItem('checked')) || [];
    setTodos(savedTodos);
    setChecked(savedChecked);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('checked', JSON.stringify(checked));
  }, [checked]);

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setChecked([...checked, false]);
    setInput('');
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    setChecked(checked.filter((_, i) => i !== index));
  };

  const toggleCheck = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <TodoContext.Provider value={{ todos, setTodos, deleteTodo }}>
      <CheckedContext.Provider value={{ checked, toggleCheck }}>
        <div className="todo-container">
          <Header title="Todo App" />
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
      </CheckedContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
