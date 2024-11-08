import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'; // for re-direct to home page

const Singup = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    })

    const collectData = async ()=>{
        console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/register',{
            method: 'post',
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-Type': 'application/json'
            },
      });
      result = await result.json();
      console.log(result);
      localStorage.setItem('user',JSON.stringify(result.result));
      localStorage.setItem('token',JSON.stringify(result.auth));
      if(result){
        navigate('/');
      }

    }
    
    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" 
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}></input>
            
            <input className="inputBox" type="text" 
            placeholder="Enter your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}></input>
            
            <input className="inputBox" type="password" 
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}></input>
            
            <button onClick={collectData} className="btnLog">Sing Up</button>
        </div>
    )
}

export default Singup;