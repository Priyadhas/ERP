import React from 'react'

import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import UserComponent from './UserComponent'
import ListUserComponent from './ListUserComponent'

const ContentComponent = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
        {/* // http://localhost:3000 */}
        <Route path='/' element= {<ListUserComponent/>}></Route>
        {/* // http://localhost:3000/list-users */}
        <Route path='/list-users' element= {<ListUserComponent/>}></Route>
        {/* // http://localhost:3000/add-user */}
        <Route path='/add-user' element= {<UserComponent/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default ContentComponent