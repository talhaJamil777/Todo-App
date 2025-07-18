import React, { useState } from 'react';
import './component/style.css';
import Header from './component/header';
import TodoItem from './component/todoitem';
import Button from './component/button';

function App() {
  const [todos, setTodos] = useState(['React', 'PHP', 'CSS']);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setInput('');
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i));
  };
  

  return (
    <div className='todo-container'> 
      <Header title='Todo App' />
      <input
        className="todo-input"
        placeholder="Add Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} onDelete={() => deleteTodo(index)} />
        ))}
      </ul>
    </div>
  );
}

export default App;
