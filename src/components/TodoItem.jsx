import React from "react";
import styles from "./todoitem.module.css";

const TodoItem = ({ item, todos, setTodos,index }) => {

  function handleDelete(index, item){
    console.log(item);
    // setTodos(todos.filter((todo)=> todo != item));
    setTodos(todos.filter((element, i) => i !== index));
  }

  function handleClick(name) {

  setTodos(todos.map((todo) =>
    todo.name === name ? { ...todo, done: !todo.done } : todo
  ));
}

const strikeitem = item.done ? styles.completed : "";


  return (
    <div className={styles.item}>
      <div className={styles.itemName} key={item.name}>
        <span className={strikeitem} onClick={()=> handleClick(item.name)}> {item.name} </span>
        <span>
          
          <button className={styles.deleteButton} onClick={()=> handleDelete(index,item)}>X</button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
