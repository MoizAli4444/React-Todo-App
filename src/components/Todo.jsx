import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import Form from "./Form";

const Todo = () => {
 
  return (
    <div>
      
      <Form/>

      <ul>
        <TodoList/>
      </ul>
    </div>
  );
};

export default Todo;
