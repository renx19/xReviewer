
import React, {useState} from 'react';
import TodoForm from '../components/ToDoApp/TodoForm';
import TodoList from '../components/ToDoApp/TodoList';
import DarkMode from '../components/DarkMode';
import "../components/ToDoApp/ToDoList.css";

const ToDoApp = () => {
  return (
    <div className="body-app" id='body-app'>
      <div className="todo-app" id='todo-app'>
       <DarkMode/>
        <TodoList/>
       
   
     </div>
    </div>
  );
}

export default ToDoApp;
