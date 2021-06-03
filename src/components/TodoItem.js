import TodoList from "./TodoList";

function TodoItem({ todo, todos, setTodos }) {
  // 삭제 함수
  const deleteHandler = () => {
    console.log(todo.id)
    const newtodos = todos.filter(item => {
      return todo.id !== item.id
    });
    setTodos(newtodos);
  }

  // 완료 함수
  const completedHandler = () => {
    
  }
  return (
    <div className="todo-item">
      <div className="todo">{todo.content}</div>
      <div>
        <button onClick={deleteHandler} className="delete-btn">X</button>
        <button className="complete-btn">V</button>
      </div>
    </div>
  ) 
}

export default TodoItem;