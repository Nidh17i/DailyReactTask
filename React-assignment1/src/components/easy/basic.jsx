/* 1. JSX Basics**
   Create a component that renders a `<div>` with your name and age using JSX variables.
   const name = "John";
   const age = 25;
   
   2.  **Props Rendering**
   Create a `Welcome` component that takes a `name` prop and displays:
   **“Hello, {name}!”**
   Render it 3 times with different names.

   3. **Basic State**
   Build a simple counter with **+** and **-** buttons to increase/decrease the number using `useState`.

   4. **Synthetic Event**
   Add an `<input>` field and a button. When the button is clicked, log the input value in the console. Use `onChange` and `onClick`.

   5. **Virtual DOM Concept** (Theory)
   In a comment block inside the code file, explain what the **Virtual DOM** is and why React uses it (2–3 lines).

   */

import { useState } from "react";

function Person(){
const name="John";
const age=25;
    return(
        <div style={{border:'2px solid black',backgroundColor:'pink',
        width:'150px',height:'100px'}}>
            <h2>Name: {name}</h2>
            <h2>Age:{age}</h2>
        
        </div>
    )

}
export function Welcome(props){
    return <h4>Welcome {props.name} !</h4>
    

}
 export const IncdecNumber=()=>{
    const[count,setCount]=useState(0);
    return(
        <>
        <h3>Count:{count}</h3>
        <button style={{backgroundColor:'green'}}onClick={()=>setCount(count+1)}>Inc+</button>
        <button style={{backgroundColor:'red'}}onClick={()=>setCount(count-1)}>Dec-</button>
        </>
    )
}

export const FormEvent=()=>{
    const[input,setInput]=useState('');
    function HandleInput(e){
        setInput(e.target.value)
     }
     function HandleButton(){
        console.log('input value:',input)
     }

return (
    <div style={{paddingTop:'20px'}}>
    <input placeholder="Enter the name" value={input} onChange={HandleInput}></input>
    <button onClick={HandleButton}>submit</button>
    <br/>
    <br/>
    </div>
)
}



export default Person;


// Virtual Dom:-virtual dom is the lightweight copy of the Dom.
// In react update the UI changes and not rerender the page
