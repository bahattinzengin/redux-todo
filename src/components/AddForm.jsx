import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { addTodo } from './../redux/actions/todoActions';

const AddForm = () => {
  const dispatch= useDispatch()
  const handleSubmit=(e)=>{
e.preventDefault()

const newTodo={
  id:v4(),
  text:e.target[0].value,
  is_done:false,
  created_at:new Date(),

}
axios
.post("/todos",newTodo)
.then(()=>dispatch(addTodo(newTodo)))

.catch(() => alert('üzgünüz bir sorun oluştu'));

e.target[0].value=""
  }



  return (
   <form
   onSubmit={handleSubmit}
   className='d-flex gap-2  justify-content-center '>

<input type="text" className='form-control ' />
<button className='btn btn-lg btn-outline-light '>Ekle</button>

   </form>
  )
}

export default AddForm