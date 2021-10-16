import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ message, removeTodo }) => {
    message = message === "" ? "No Message Provided" : message;

    const handleClick = () => {
        removeTodo(message);
    };

    return (
        <div className="Todo">
            <div className="Todo-message">
                {message}
            </div>
            <div className="Todo-button">
                <button onClick={handleClick}>X</button>
            </div>
        </div>
    );
};

export default Todo;