import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ message, removeTodo }) => {
    const handleClick = () => {
        removeTodo(message);
    };

    return (
        <div className="Todo">
            {message}
            <button onClick={handleClick}>X</button>
        </div>
    );
};

export default Todo;