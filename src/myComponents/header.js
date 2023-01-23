import React , { useState }from "react";
import '../App'


export default function Header(){
    let aTagStyle = {
       textDecoration : "none"
    }


    return(
        <div>
        <center>
        <a href="https://www.github.com/tarunsraina" style={aTagStyle}>github  </a>
        |
        <a href="https://www.codechef.com" style={aTagStyle}>  codechef  </a>
        |
        <a href="https://www.cumulations.com" style={aTagStyle}>  company  </a>
        </center>
        <center className="HeaderTitle">
            <h3> UseEffect Demo </h3> 
            
        </center>
        <center>
            <h2>Implemented using useState , useEffect , fetch to call APIS</h2>
            <h2>API ENDPOINT : https://jsonplaceholder.typicode.com</h2>
        </center>
        
        </div>
    )
}

