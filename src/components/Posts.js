import React,{useEffect, useState} from 'react'
import Loader from 'react-spinners/CircleLoader'


export default function Posts() {
    const [posts,setPosts]=useState([])
    const [isLoading,setLoading]=useState(true)
 
    useEffect(()=>{
        setTimeout(function(){
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res=>res.json())
            .then(data=>setPosts(data))
            .catch(err=>console.log(err))
            setLoading(false)
        },1000)
       
    },[])
       

    
  return (
    <div className="container">
        <h2>Latest Posts</h2>
        {isLoading?<Loader/>: posts.map(post=>(
            <div key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ))}
        {/* <button onClick={getPosts}>Get Posts</button> */}
       
    </div>
  )
}
