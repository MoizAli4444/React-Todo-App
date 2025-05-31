import React from "react";
import TodoItem from "./TodoItem";
import styles from './todolist.module.css'

const TodoList = ({todos}) => {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
};

export default TodoList;
