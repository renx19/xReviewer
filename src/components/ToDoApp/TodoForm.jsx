import React, { useState } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    // Clear the input field by setting it to an empty string
    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
    {props.edit ? (
      <>
        <input
          type="text"
          placeholder="Add a To-do List"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="todo-button">Update</button>
      </>
    ) : (
      <>
        <input
          type="text"
          placeholder="Add a To-do List"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="todo-button">Add todo</button>
      </>
    )}
  </form>
  );
}

export default TodoForm;
