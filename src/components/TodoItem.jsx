import React from "react";
import styles from "./todoitem.module.css";

const TodoItem = ({ item, todos, setTodos,index }) => {

  function handleDelete(index, item){
    console.log(item);
    // setTodos(todos.filter((todo)=> todo != item));
    setTodos(todos.filter((element, i) => i !== index));
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemName} key={item}>
        {item}
        <span>
          {" "}
          <button className={styles.deleteButton} onClick={()=> handleDelete(index,item)}>X</button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
