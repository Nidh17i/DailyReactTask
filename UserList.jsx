import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export const UserList = () => {
  const { users } = useContext(UserContext);

  const[searchUser,setSearchUser]=useState();

  
  const filter= searchUser ? users.filter((user)=>(
    user.name.includes(searchUser)
     // console.log(user)
      //console.log(filter);
    //console.log(searchUser);
  )):users;
  console.log(filter)


  return (
    <div
      style={{
        textAlign: "center",
        border: "10px solid #C5CBC6",
        backgroundColor: "#D6E9D9",
        width: "140vh",
        height: "90vh",
      }}
    >
      <h1 style={{ color: "black" }}>User Management System</h1>
      <input 
      style={{ margin: "20px" }} 
      type="text" 
      placeholder="search Name"
      value={searchUser}
      onChange={(e)=> setSearchUser(e.target.value)}
       />
     
      
      <button type="submit">search</button>
      <br />
      <br />


      <Link to="/add">
        <button>Add User</button>
      </Link>

      <br />
      <br />
      <h2>
        <b>User List</b>
      </h2>

      {filter.length ===0 ? (<p>user not found'</p>):(

      filter.map((data) => (
        <div
          style={{
            color: "purple",
            border: "2px solid black",
            width: "150px",
            display: "inline-block",
            margin: "20px",
          }}
          key={data.id}
        >
          <h4>Name:{data.name} </h4>
          <h4>Role:{data.role}</h4>
       <Link to={`/user/${data.id}`}>
          <button>view</button>
          </Link>
        </div>
      )))
    }
    </div>
  );

};