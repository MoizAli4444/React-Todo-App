import React from "react";

const TodoList = () => {
  return (
    <>
      {todos.map((item) => (
        <TodoItem item={item} />
      ))}
    </>
  );
};

export default TodoList;
