import React, { useContext } from "react";
import TodoContext from "./TodoContext";

const TodoItem = ({ text, index }) => {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <li className="todo-item">
      <span>
        <input type="checkbox" />
        <p className="todo-item-text">{text}</p>
      </span>
      <button onClick={() => deleteTodo(index)} className="btn btn-danger col-2 btn">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
