import React, { useState , useEffect } from "react";
import '../App'


export default function Media(){

    const [resourceType , setResourceType] = useState('posts');
    const [items , setItems] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(res=>res.json())
        .then(json=>setItems(json))
    },[resourceType])

    
    return(
        <div>
            <button onClick={()=>{setResourceType('posts')}}>Posts</button>  
            <button onClick={()=>{setResourceType('users')}}>Users</button>
            <button onClick={()=>{setResourceType('comments')}}>Commments</button>
            <h1>{resourceType}</h1>
            {items.map(item=>{
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </div>   
    )
}