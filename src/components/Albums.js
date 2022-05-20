import axios from 'axios'
import React, { useEffect,useState } from 'react'
import Loader from "react-spinners/CircleLoader"

export default function Albums() {

    const [albums,setAlbums]=useState([])
    const [isLoading,setLoading]=useState(true)
    useEffect(()=>{
        setTimeout(function(){
            axios.get("https://jsonplaceholder.typicode.com/albums")
            .then(res=>setAlbums(res.data))
            .catch(err=>console.log(err))
            setLoading(false)
        },3000)
       
    })
  return (
    <div className="container">
        <h2>Albums</h2>
        {isLoading?<Loader/>: <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserId</th>
                    <th>Title</th>
                   
                </tr>
            </thead>
            <tbody>
                {albums.map(album=>(
                    <tr>
                        <td>{album.id}</td>
                        <td>{album.userId}</td>
                        <td>{album.title}</td>
    
                    </tr>
                ))}
            </tbody>
        </table>}
       
    </div>
  )
}
