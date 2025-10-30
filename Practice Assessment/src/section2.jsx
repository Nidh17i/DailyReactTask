// Section B – Short Coding Questions (30 Marks)**

import { useState } from "react"

// Each carries **5 marks**.

// ### **1️⃣ JSX Practice**

// Create a React component named `Welcome` that renders:
// Hello ! Welcome to React 

// inside a `<h2>` element.


export const Welcome=()=>{
    
return (
        <div style={{backgroundColor:'purple',color:'white',height:'50vh', textAlign:'center',paddingTop:'20vh'}}>
      <h2>Hello! Welcome to React</h2>
    </div>
)}

// ### **2️⃣ Functional Component & Props**
// Create a component `Student` that accepts two props:
// * `name`
// * `course`
// Render output as:
// Student Name: Rahul
// Course: React Fundamentals

// **Parent Component:**
// ```jsx
// <Student name="Rahul" course="React Fundamentals" />
 export const Student =(props)=>{
    return(
        <div style={{backgroundColor:'black',color:'white',height:'50vh', textAlign:'center',paddingTop:'20vh'}}>
        <h3>Student Name: {props.name}</h3>
        <h3>Course: {props.course}</h3>
        </div>
    )

 }




// ### **3️⃣ State Example**

// Create a component `Counter` with:

// * A button “Increment Count”
// * A paragraph showing `Current Count: <value>`

// When button is clicked, increase count by 1.

 export const Counter=()=>{
    const[count,setCount]=useState(0);
     return(
    <div style={{ backgroundColor:'green',color:'black',height:'50vh', textAlign:'center',paddingTop:'20vh'}}>
        <p >Current Count: {count}</p>
        <button  style={{borderRadius:'20vh',height:'5vh'}}onClick={()=>setCount(count+1)}>Increment Count</button>

    </div>
   )

}

// ### **4️⃣ Event Handling**

// Create a component `ColorChanger`:

// * A button “Change Color”
// * A text `"The box is red"`
// * When button is clicked → toggle the box text & background color between red and blue.

export const ColorChanger=()=>{
    const [color,setColor]=useState(false);

    function ToggleColor(){
        setColor(!color)
 }
    return(


    <div>
    <p style={{backgroundColor:color ? "blue":"red"}}>The Box is red</p>
    <button onClick={ToggleColor} >Change Color</button>
    </div>
    )
}

// ---

// ### **5️⃣ Conditional Rendering**

// Create a component `LoginStatus`:

// * Has a boolean state `isLoggedIn`
// * Show `"Welcome Back!"` if true
//   otherwise `"Please Login"`
// * Add a button `"Toggle Login"` to switch state.

// ---

 export const LoginStatus=()=>{
 const [isLogin,setIslogin]=useState(false);
 function Check(){
    setIslogin(!isLogin);

 }
 return(
    <div style={{ textAlign:'center',backgroundColor:'lightgreen', height:'30vh'}}>
    <p style={{paddingTop:'10vh',color:'black'}}>{isLogin ? 'Welcome Back':'Please Login'}</p>
    <button style={{ border:'50vh', borderRadius:'20%',backgroundColor:'black', color:'white'}}onClick={Check}>Toggle Login</button>
    </div>
 )



}

// ### **6️⃣ Rendering Lists**

// Create a component `FruitsList`:

// ```js
//const fruits = ["Apple", "Banana", "Mango", "Orange"];

//Render each fruit as a list item (`<li>`) with a unique key.

 export const FruitsList=()=>{
    const fruits=["Apple","Banana","Mango","Orange"];
    return(
        <div style={{ textAlign:'center',paddingTop:'20vh',backgroundColor:'purple',height:'50vh'}}>
            <h2 style={{color:'white'}}>Fruits List</h2>
    <ui>
     
       {fruits.map((fruit,index)=>(
        <li style={{color:'white'}}key={index}>{fruit}</li>
        
    ))}
 </ui>  
 </div>  
    
    
    
    )

}

