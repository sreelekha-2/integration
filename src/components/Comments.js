import React, { useEffect,useState } from 'react'
import axios from "axios"
import Loader from "react-spinners/CircleLoader"

export default function Comments() {
    const [comments,setComments]=useState([])
    
    const [isLoading,setLoading]=useState(true)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res=>setComments(res.data))
        .catch(err=>console.log(err))
        setLoading(false)
    },[])
  return (
    <div className="container">
        <h2>User Comments</h2>
        {isLoading?<Loader/>: <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>PostId</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {comments.map(comment=>(
                    <tr>
                        <td>{comment.id}</td>
                        <td>{comment.postId}</td>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>}
       
    </div>
  )
}
