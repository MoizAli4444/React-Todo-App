import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  useEffect(() => {
    console.log("Updated Todos:", todos);
  }, [todos]); // This runs every time `todos` changes

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((item) => (
          <TodoItem item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
