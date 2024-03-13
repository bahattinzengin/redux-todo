import React, { useEffect } from 'react'
import AddForm from './components/AddForm';
import ListTodo from './components/ListTodo';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setTodos } from './redux/actions/todoActions';
axios.defaults.baseURL="http://localhost:3000/";

const App = () => {
  const dispatch =useDispatch()
  useEffect(()=>{
    axios.get("/todos")
    .then((res)=>{dispatch(setTodos(res.data))})
  },[])
  return (
    <div className='container d-flex  flex-column  gap-5  my-5 w-50  '>
      <h2 className='text-center '>Redux</h2>
<AddForm/>
<ListTodo/>

    </div>
  )
}

export default App