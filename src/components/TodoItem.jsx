import React from 'react'

const TodoItem = ({item}) => {
  return (
    <>
        <li key={item}>{item}</li>
    </>
  )
}

export default TodoItem