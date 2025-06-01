import React from 'react'
import styles from './todoitem.module.css'


const TodoItem = ({item}) => {
  return (
    <div className={styles.item}>
        <div className={styles.itemName} key={item}>{item} 
          <span> <button className={styles.deleteButton}>X</button></span>
        </div>
        <hr className={styles.line} />
    </div>
  )
}

export default TodoItem