// ## ✅ **Bonus Challenge**

import { useState } from "react"

// Create a `ToggleMessage` component:

// * Initially shows “Good Morning”
// * Button toggles it to “Good Night”
// * Change background color accordingly (light yellow ↔ dark blue)
 
export  const ToggleMessage=()=>{
    const[isMorning,setIsMorning]=useState(true);
    const Toggle=()=>{
        setIsMorning(!isMorning);
    }
    return(
        <div style={{backgroundColor:isMorning ?'LightYellow' :'darkBlue',height:'50vh',textAlign:'center',border:'2px solid black',color:isMorning ? 'black':'white'}}>
            <h1>{isMorning ? 'Good Morning' :'Good Night'}</h1>
            <button onClick={Toggle}>Click</button>
        </div>
    )
}