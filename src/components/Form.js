import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form({ inputText, setInputText, todos, setTodos }) {
  
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { content: inputText, completed: false, id: uuidv4() }
    ]);
    setInputText('');
  }

  return (
    <form>
      <input 
        value={inputText}
        onInput={inputTextHandler}
        type="text" 
        className="todo-input" 
      />
      <button onClick={submitTodoHandler}>Ok</button>
    </form>
  );
}

export default Form;