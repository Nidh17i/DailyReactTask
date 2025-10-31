

import { useContext } from 'react';
import {  useParams,Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

export default function UserDetail() {
  const{id}=useParams();
  const navigate=useNavigate();

  const{users,dispatch}=useContext(UserContext)
   const user=users.find((value) => value.id ===Number(id));

   const handleDelete=()=>{
    const confirmDelete=window.confirm("Delete kr du kya");
    if(confirmDelete){
      dispatch({type:'deleteUser',payload:user.id})
     navigate('/')
    }

   }
  return (
    <div>
      <h2>User Details</h2>
     
      
    <div>
     <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        <div >
          <Link to={`/edit/${user.id}`}>
            <button> Edit</button>
          </Link>
          <button onClick={handleDelete} > Delete</button>
        </div>
    </div>
      
    </div>
  )
}
