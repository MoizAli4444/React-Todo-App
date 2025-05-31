import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
 
  return (
    <div>
      
      <ul>
        {todos.map((item) => (
          <TodoItem item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
