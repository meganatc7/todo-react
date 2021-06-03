import React from 'react';
import TodoItem from './TodoItem'

function TodoList({ todos, setTodos }) {
  return (
    <div className="container">
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

export default TodoList;