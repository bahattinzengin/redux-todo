import React from 'react'

import TodoCard from './TodoCard';
import { useSelector } from 'react-redux';

const ListTodo = () => {
  
const state=  useSelector((store)=>store.todoReducer)
  return (
    <div>

      {state.todos.length===0 ?( <h5>Her hangi bir yapılacak eklenmedi</h5>):( 
        state.todos.map((todo)=>(
          <TodoCard key={todo.id} todo={todo}/>
        ))
      )}
     
    </div>
  )
}

export default ListTodo