import React, { useState } from 'react'
import { createUser } from '../Services/UserService'
import {useNavigate} from 'react-router-dom';

  const UserComponent = () => {

    const [username,setUserName]= useState('')
    const [email,setUserEmail]= useState('')
    const [role,setUserRole]= useState('')
    const [password,setPassword]= useState('')

    const navigator=useNavigate();

    function handleUserName(e){
      setUserName(e.target.value);
    }

    function handleUserEmail(e){
      setUserEmail(e.target.value);
    }

    function handleUserRole(e){
      setUserRole(e.target.value);
    }

    function handlePassword(e){
      setPassword(e.target.value);
    }

    function SaveUser(e){
      e.preventDefault();
      const user={username, email,role,password}
      console.log(user)

      createUser(user).then((response) => {
        console.log(response.data);
        navigator('/list-users')
      })
    }
  return (
    <div className='container'>
      <br></br>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>New User</h2>
          <div className='card-body'>
            <form >
              <div className='for-group mb-2'>
                <label className='form-label'>User Name</label>
                <input 
                  type='text' 
                  placeholder='Enter User Name'
                  name='UserName'
                  value={username}
                  className='form-control'
                  onChange={handleUserName}>

                  </input>
                </div>
                <div className='for-group mb-2'>
                  <label className='form-label'>Email</label>
                  <input 
                  type='text' 
                  placeholder='Enter Email'
                  name='Email'
                  value={email}
                  className='form-control'
                  onChange={handleUserEmail}
                  >
                  </input>
                </div>
                <div className='for-group mb-2'>
                  <label className='form-label'>Role</label>
                  <input 
                  type='text' 
                  placeholder='Enter Role'
                  name='UserRole'
                  value={role}
                  className='form-control'
                  onChange={handleUserRole}
                  >
                  </input>
                </div>
                <div className='for-group mb-2'>
                  <label className='form-label'>Password</label>
                  <input 
                  type='password' 
                  placeholder='Enter Password'
                  name='Password'
                  value={password}
                  className='form-control'
                  onChange={handlePassword}
                  >
                  </input>
                </div>
              <button className='btn btn-success' onClick={SaveUser}>SAVE</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default UserComponent