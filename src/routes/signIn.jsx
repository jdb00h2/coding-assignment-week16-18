import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import '../styles/signIn.css'

export default function SignIn( {handleSignIn, signedIn} ) {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (username === 'Admin' && password === '123') {
            handleSignIn(true);
            navigate('/admin')
        } else alert('WRONG!');
    };

    const navigate = useNavigate();

    if(signedIn) {
        return <Navigate to='/admin' />;
    }

    return(
        <div className='mt-2'>
            <form id='signIn'>
                <h3>Admin Log In</h3>
                <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} value={username}/>
                <br></br>
                <input type='password' placeholder='Password' className='mb-1' onChange={(e) => setPassword(e.target.value)} value={password}/>
                <br></br>
                <button type='submit' value='submit' className='btn btn-primary' onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}