import React, { useEffect, useState } from 'react'

const Todo = () => {

    const [todo,setTodo] = useState("");
    const [todos,setTodos] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
        
    }

    useEffect(() => {
    console.log('Updated Todos:', todos);
  }, [todos]); // This runs every time `todos` changes

  return (
    <div>
        <form  onSubmit={handleSubmit}>
            <input onChange={(e)=> setTodo(e.target.value)} value={todo} type='text' />
            <button type='submit'>Add</button>
        </form>

    </div>
  )
}

export default Todo