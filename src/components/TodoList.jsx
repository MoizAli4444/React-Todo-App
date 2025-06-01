import React from "react";
import TodoItem from "./TodoItem";
import styles from './todolist.module.css'

const TodoList = ({todos,setTodos}) => {
  return (
    <div className={styles.list}>
      {todos.map((item,index) => (
        <TodoItem item={item} todos={todos} setTodos={setTodos}     index={index}  />
      ))}
    </div>
  );
};

export default TodoList;
