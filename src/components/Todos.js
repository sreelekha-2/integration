import React, {useEffect, useState} from 'react'

import axios from "axios"
import Loader from "react-spinners/CircleLoader"

export default function Todos() {

    const [todos,setTodos]=useState([])
    const [isLoading,setLoading]=useState(true)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res=>setTodos(res.data))
        .catch(err=>console.log(err))
        setLoading(false)
    },[])
  return (
    <div className="container">

    <h2>Todos Details</h2>
    {isLoading?<Loader/>:<table className="table">
        <thead>
            <tr>
                <th>S.No</th>
                <th>User Id</th>
                <th>Title</th>
                <th>Action</th>
               
            </tr>
        </thead>
        <tbody>
        {todos.map(todo=>(

            <tr key={todo.id}>
               <td>{todo.id}</td>
               <td>{todo.userId}</td>
               <td>{todo.title}</td>
               {/* {console.log(typeof todo.completed)} */}
               <td>{`${todo.completed}`}</td>
              
            </tr>
        ))}
        </tbody>
    </table>}

    </div>
  )
}
