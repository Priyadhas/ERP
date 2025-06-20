import React from 'react'
import { useState } from 'react'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListUserComponent from './components/ListUserComponent'
import UserComponent from './components/UserComponent'
import LoginComponent from './components/LoginComponent'
import './App.css'
import HomepageComponent from './components/HomepageComponent'
import ContentComponent from './components/ContentComponent'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import NewClientForm from './components/NewClientForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <HeaderComponent/>
      <BrowserRouter>
            <Routes>
        {/* // http://localhost:3000 */}
        <Route path='/' element= {<LoginComponent/>}></Route>
        <Route path='/homepage' element= {<HomepageComponent/>}></Route>
        {/* // http://localhost:3000/list-users */}
        <Route path='/list-users' element= {<ListUserComponent/>}></Route>
        {/* // http://localhost:3000/add-user */}
        <Route path='/add-user' element= {<UserComponent/>}></Route>
        {/* // http://localhost:3000/add-client */}
        <Route path='/add-client' element= {<NewClientForm/>}></Route>
      </Routes>
    </BrowserRouter>
      <FooterComponent/>
    </div>
    </>
  )
}

export default App
