import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  };

  const updateTask = (taskId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTasks((prevTasks) =>
      prevTasks.map((item) => (item.id === taskId ? newValue : item))
    );
  };

  const removeTask = (id) => {
    const removedTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(removedTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTask} />
      <Todo
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </>
  );
}

export default TodoList;
