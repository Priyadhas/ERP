import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const SidebarComponent = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='bg-dark col-auto col-md-3 min-vh-100'>
                <a className='text-decoration-none text-white d-flex align-itemcenter'>
                    <i className='fs-4 bi bi-speedometer'></i>
                    <span className='ms-1 fs-4'></span>
                </a>
                <ul className='nav nav-pills flex-column'>
                    <li className='nav-item text-white fs-4'>
                        <a href="#" className='nav-link' aria-current="page">
                            <span className='ms-2'>One</span>
                        </a>
                    </li>
                    <li className='nav-item text-white fs-4'>
                        <a href="#" className='nav-link' aria-current="page">
                        <span className='ms-2'>One</span>
                        </a>
                    </li>
                    <li className='nav-item text-white fs-4'>
                        <a href="#" className='nav-link' aria-current="page">
                        <span className='ms-2'>One</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default SidebarComponent