import React, { useEffect, useState } from "react";
import styles from './form.module.css'

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
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <input
        className={styles.modernInput}
        placeholder="enter item name"
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
