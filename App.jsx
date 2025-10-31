
import UserDetail from "./components/UserDetail"
import { UserForm } from "./components/UserForm"
import { UserList } from "./components/UserList"
import { UserProvider } from "./context/UserProvider"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
return(
  <>
  <BrowserRouter>
   <UserProvider>
  <Routes>
    <Route path="/"element={<UserList/>}/>
    <Route path="/add" element={< UserForm/>}/>
    <Route path="/user/:id" element={<UserDetail/>}/>
    <Route path="/edit/:id" element={<UserForm />} />


  </Routes>
 
 
     

  
  

  </UserProvider>
  </BrowserRouter>
  </>
)

}


// context/
//  │   ├── UserContext.js
//  │   ├── UserProvider.js
//  │   ├── ThemeContext.js
  

export default App

