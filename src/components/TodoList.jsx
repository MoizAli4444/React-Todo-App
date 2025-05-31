import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos}) => {
  return (
    <>
      {todos.map((item) => (
        <TodoItem item={item} />
      ))}
    </>
  );
};

export default TodoList;
