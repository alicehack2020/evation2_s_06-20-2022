import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { AuthContext } from "../context/AuthContext";

const Login = () =>
 {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
 const navigate=useNavigate()
    const loginData=()=>{
         const data={email:email,password:password}
         fetch('https://reqres.in/api/login', {
           method: 'POST', 
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(data),
         })
         .then(response => response.json())
         .then(data => {
          if(data.token)
          {
            navigate("/")
          }
            
         })
         .catch((error) => {
           console.error('Error:', error);
         });
         


    }

  return <div>{

    <>
    <div>
       <p>Email</p>
       <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>


    <div>
       <p>password</p>
       <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>

    <button onClick={loginData}>login</button>
    </>
   
   
  }</div>;
};

export default Login;
