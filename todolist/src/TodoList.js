import React, { useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";
import {v4 as uuid} from "uuid";

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

    const allTodos = todos.map(todo => <Todo 
                                        message={todo} 
                                        removeTodo={removeTodo} 
                                        key={uuid()}/>);

    return (
        <div className="TodoList">
            <div className="TodoList-header">
                <h1>Your ToDo List</h1>
            </div>
            <div className="TodoList-todos">
                {allTodos}
            </div>
        </div>
    );
};

export default TodoList;