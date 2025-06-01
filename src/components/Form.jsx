import React, { useEffect, useState } from "react";
import styles from "./form.module.css";

const Form = ({ todos, setTodos }) => {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name:"", done:false});

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    // setTodo("");
    setTodo({name:"", done:false});
  }

  useEffect(() => {
    console.log("Updated Todos:", todos);
  }, [todos]); // This runs every time `todos` changes

  return (
    <>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            placeholder="enter item name"
            onChange={(e) => setTodo({name:e.target.value,done:false})}
            value={todo.name}
            type="text"
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
