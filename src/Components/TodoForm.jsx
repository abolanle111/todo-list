import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            placeholder="Update your task"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-btn edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a task"
            value={input}
            name="text"
            className="todo-input"
            ref={inputRef}
            onChange={handleChange}
          />
          <button className="todo-btn" onClick={handleSubmit}>Add Task</button>
        </>
      )}
      ;
    </form>
  );
}

export default TodoForm;
