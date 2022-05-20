import React, {useEffect, useState} from 'react'

import axios from "axios"
import Loader from "react-spinners/CircleLoader"

export default function Photos() {
    const [photos,setPhotos]=useState([])
    
    const [isLoading,setLoading]=useState(true)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(res=>setPhotos(res.data))
        .catch(err=>console.log(err))
        setLoading(false)
    },[])
  return (
    <div className='container'>
        <ul>
        {isLoading?<Loader/>:photos.map(photo=>(
           <li key={photo.id}>
                <img src={photo.url}/>
                <h4>Album Id :{photo.albumId}</h4>
                <p>{photo.title}</p>
            </li>
        ))}
        </ul>
        

    </div>
  )
}
