import { useState } from "react"
import { UserCard } from "./UserCard"

 export const Parent=()=>{
    const [count,setCount]=useState(0);
    const data=[
        {name:'Jiya',age:9},
        {name:'Siya',age:29},
        {name:'Tiya',age:20}

    ]

    return(
        <div>
        {data.map((data)=>{
            return  <UserCard data={data}/>
        })}

        <button>Inc</button>

        


    
        </div>
    )
}