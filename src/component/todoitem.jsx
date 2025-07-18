import React from "react";

const todoitem = (props) => {
    return (
        <li className="todo-item">
            <span> 
            <input type="checkbox" />
            <p className="todo-item-text">{props.text}</p> 
            </span>
            <button onClick={props.onDelete} className="btn btn-danger col-2 btn">Delete</button>
        </li>
    );
};  
export default todoitem;
