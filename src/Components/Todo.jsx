import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todo = ({ tasks, completeTask, removeTask, updateTask}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return tasks.map(task => (
    <div
      className={task.isComplete ? 'todo-row complete' : 'todo-row'}
      key={task.id}
    >
      <div onClick={() => completeTask(task.id)}>
        {task.text}
      </div>
      <div className='icons'>
        <MdDelete
          onClick={() => removeTask (task.id)}
          className='delete-icon'
        />
        <FaEdit 
          onClick={() => setEdit({ id: task.id, value: task.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;
