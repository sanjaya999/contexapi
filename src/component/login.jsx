import React,{useState,useContext} from 'react'
import UserContexProvider from '../contex/UserContexProvider'

function login() {

    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')


    const handleSubmit = ()=>{

    }
  return (
    <div>
        <h2>login</h2>

        
        
        <input type="text" placeholder='username'  />
        value={username}
        onChange = {(e)=> setUsername(e.target.value)}
        <input type="password" placeholder='password'  />
        value={password}
        onChange = {(e)=> setPassword(e.target.value)}
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default login