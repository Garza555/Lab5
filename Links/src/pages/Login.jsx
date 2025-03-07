import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const onLogin = () => {
        navigate('/Home');
    }
  return (
    <div>
        <h1>Login</h1>
        <input type='text' name='user' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <button onClick={onLogin}>Send</button>
    </div>
  )
}
