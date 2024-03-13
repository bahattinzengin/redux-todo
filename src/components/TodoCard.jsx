import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Modal from './Modal'
import axios from 'axios'
import { deleteTodo, editTodo } from '../redux/actions/todoActions'

const TodoCard = ({ todo }) => {
const dispatch= useDispatch()

const [isOpen ,setIsOpen]=useState(false)

const handleDelete=()=>{

  axios
  .delete(`/todos/${todo.id}`)
  .then(()=>
  dispatch(deleteTodo(todo.id)))

}

const handleUpdate=()=>{
const updated={...todo,is_done:!todo.is_done}

  dispatch(editTodo(updated))
}


  return (

    <>
    <div className='border shadow-lg p-4 my-5'>
      <h5> {todo.text} </h5>
      <h6> {todo.is_done ? "Tamamlandı" : "Devam Ediyor"} </h6>
      <p>{new Date().toLocaleDateString()} </p>

      <button
      onClick={()=>setIsOpen(!isOpen)}
        className='btn btn-primary'
      >
        Düzenle
      </button>

      <button
      onClick={handleUpdate}
        className='btn btn-success mx-4 '
      >
      {todo.is_done? " Geri Al":"Tamamla"}
      </button>

      <button
        className='btn btn-danger'
        onClick={handleDelete}
      >
        Sil
      </button>



    </div>
{
isOpen && <Modal
close={()=>setIsOpen(false)}
todo={todo}
/>

}
    

    </>



  )
}

export default TodoCard