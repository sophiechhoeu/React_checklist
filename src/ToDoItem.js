import React from 'react';

const ToDoItem = ({description, completed, onToggle}) => (
  <label>
  <input type="checkbox" checked={completed} onChange={ onToggle }/>
    {description}
  </label>
)


export default ToDoItem
