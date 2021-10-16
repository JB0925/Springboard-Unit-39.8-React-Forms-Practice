import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ message }) => {
    return (
        <div className="Todo">{message}</div>
    );
};

export default Todo;