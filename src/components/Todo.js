import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo,getSubTodos }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div className="col-1 d-flex justify-content-center align-items-center">
        <input type="checkbox" onClick={() => completeTodo(todo.id)} className="form-check-input" />
      </div>
      <div className="col-10 d-flex align-items-center" key={todo.id}>
        <span onClick={()=>getSubTodos(todo)}>{todo.text}</span>
      </div>
      <div className="col-1 d-flex justify-content-center align-items-center">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;