import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import Form from "./Form";

const Todo = () => {
  const [todos, setTodos] = useState([]);
 
  return (
    <div>
      
      <Form todos={todos} setTodos={setTodos} />

      <ul>
        <TodoList todos={todos} />
      </ul>
    </div>
  );
};

export default Todo;
