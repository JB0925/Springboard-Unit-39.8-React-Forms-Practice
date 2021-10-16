import React, { useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = () => {
    const [todos, updateTodos] = useState([]);
    const addTodo = newTodo => {
        updateTodos([
            ...todos,
            newTodo
        ]);
    };

    const removeTodo = oldTodo => {
        updateTodos(() => {
            const filteredTodos = todos.filter(todo => todo !== oldTodo);
            return filteredTodos;
        });
    };
};