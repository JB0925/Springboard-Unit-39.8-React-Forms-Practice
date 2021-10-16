import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = ({ addTodo}) => {
    const initialState = {
        newTodo: ""
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData({
            [name]: value
        });
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo(formData.newTodo);
        setFormData(initialState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newTodo">Enter a New Todo</label>
            <input
                id="newTodo"
                type="text"
                name="newTodo"
                placeholder="i.e. Mow The Grass"
                value={formData.newTodo}
                onChange={handleChange}    
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodoForm;