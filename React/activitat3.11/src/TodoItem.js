import React from 'react';

const TodoItem = ({ task, deleteTask }) => {
  return (
    <li>
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
