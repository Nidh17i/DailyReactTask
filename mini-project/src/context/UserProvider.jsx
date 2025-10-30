
import {  useReducer } from "react";


import { UserContext } from "./UserContext";



function reducer(state,action){
    //console.log(action);
    switch(action.type){
        
        case'addUser':{
    localStorage.setItem( 'users',JSON.stringify([...state,action.payload]));

            return[...state,action.payload];
        }
        case'updateUser':{
          return state.map((value)=>{
            value.id === action.payload.id ? action.payload : value
          })
        }
    }
}

export const UserProvider=({children})=> {
    const[users,dispatch]=useReducer(reducer, JSON.parse(localStorage.getItem("users")) || []);


    
  return (

    <UserContext.Provider value={{users,dispatch}}>
     {children}

    </UserContext.Provider>
  )
}