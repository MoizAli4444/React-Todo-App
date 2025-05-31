import React, { useState } from 'react'

const Todo = () => {

    const [todo,setTodo] = useState("");

  return (
    <div>
        <form action="" method="post">
            <input onChange={(e)=> setTodo(e.target.value)} value={todo} type='text' />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Todo