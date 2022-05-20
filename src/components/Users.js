import React, {useEffect, useState} from 'react'

import axios from "axios"
import Loader from "react-spinners/CircleLoader"

export default function Users() {


    const [users,setUsers]=useState([])

    const [isLoading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err))
        setLoading(false)
    },[])
  
    
    
  return (
    <div className="container">
    <h2>User Details</h2>
    {isLoading?<Loader/>:<table className="table">
        <thead>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>  
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
        {users.map(user=>(
            <tr key={user.id}>
               <td>{user.id}</td>
               <td>{user.name}</td>
               <td>{user.username}</td>
               <td>{user.email}</td>
               <td>{user.phone}</td>
            </tr>
        ))}
        </tbody>
    </table>}
    
  
    </div>
  )
}
