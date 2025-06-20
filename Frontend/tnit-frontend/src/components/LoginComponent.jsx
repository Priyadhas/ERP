import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { login } from '../Services/UserService'

const LoginComponent = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigator = useNavigate();

    function handleLogin(e) {
        try {
          e.preventDefault();
          
          console.log(email)
          console.log(password)
            if (!email ) {
                setError('Email cannot be empty.');
                return;
            }
            if (!password) {
                setError('Password cannot be empty.');
                return;
            }
            

            login(email,password).then((response) => {
            console.log('Login successful:', response.data);
            navigator('/homepage');
            })
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            setError('Invalid username or password.');
        }
    };
  return (
    <div className='container'>
      <br></br>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'> Login </h2>
          <div className='card-body'>
            <form >
                <div className='for-group mb-2'>
                  <label className='form-label'>Email</label>
                  <input 
                  type="email"
                  value={email}
                  placeholder='Enter Email'
                  name='Email'
                  className='form-control'
                  onChange={(e) => setEmail(e.target.value)}
                  >
                  </input>
                </div>
                <div className='for-group mb-2'>
                  <label className='form-label'>Password</label>
                  <input 
                  type='password' 
                  placeholder='Enter Password'
                  name='Password'
                  className='form-control'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete='on'
                  >
                  </input>
                </div>
              <button className='btn btn-success' onClick={handleLogin}>Login</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent