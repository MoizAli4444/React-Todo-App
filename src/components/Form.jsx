import React, { useEffect, useState } from "react";

const Form = ({todos,setTodos}) => {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  useEffect(() => {
    console.log("Updated Todos:", todos);
  }, [todos]); // This runs every time `todos` changes

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Form;
