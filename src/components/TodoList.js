import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import TodoSubForm from './TodoSubForm';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [subtodos, setSubTodos] = useState([]);
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const getSubTodos = val => {
    setSubTodos(val);
  }
  return (
    <div className="d-flex flex-column flex-lg-row">
      <div className="col-12 col-lg-4 pb-3 pb-lg-0">
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          getSubTodos={getSubTodos}
        />
      </div>
      <TodoSubForm subtodos={subtodos} todos={todos} />
    </div>
  );
}

export default TodoList;