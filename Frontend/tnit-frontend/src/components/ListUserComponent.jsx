import React, { useEffect,useState } from 'react'

import { listUsers } from '../Services/UserService'
import { useNavigate } from 'react-router-dom'

const ListUserComponent = () => {

    const [users,setusers]=useState([])
    const navigator=useNavigate();
    useEffect(() =>{
        listUsers().then((response) =>{
            setusers(response.data)
        }).catch(error =>{
            console.error(error)
        })
    },[])

    function addNewUser(){
        navigator('/add-user')
    }

  return (
    <div className='container'>
        <h2 className='text-center'> List of Employees</h2>
        <button className='btn btn-dark mb-2' onClick={addNewUser}> New User</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user=>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListUserComponent