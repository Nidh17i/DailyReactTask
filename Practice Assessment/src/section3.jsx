// ## 💻 **Section C – Practical Mini Projects (50 Marks)**

import React,{ useState } from "react"

// ### **1️⃣ Student Dashboard (25 Marks)**

// **Goal:** Combine props, state, and lists.

// Build a component `Dashboard`:

// * Maintain state `students` (array of student objects `{name, course}`).
// * Display them in a table/list.
// * Add an input and button to **add a new student**.
// * Each student should render as:

//   ```txt
//   Name: <name> | Course: <course>




// * If the list is empty, show: `"No students yet!"`

// **Key Concepts:**
// State management, rendering lists, conditional rendering, event handling.

// ---

// ### **2️⃣ Simple To-Do App (25 Marks)**

// **Goal:** Practice events, state updates, conditional rendering, and lists.

// **Requirements:**

// * Input box for new task
// * Button “Add Task”
// * Render all tasks below
// * Each task should have a **Delete** button
// * Show `"No tasks available"` when list is empty

// **Bonus:** Highlight task count (e.g., “3 Tasks Remaining”).

// **Key Concepts:**
// State, lists, conditional rendering, props (if you split into child component).

// ---


export const TodoApp=()=>{
    const[inputValue,setInputValue]=useState('');
    const [task,setTask]=useState([]);
    const handleInput=(event)=>{
        setInputValue(event.target.value);
        
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!inputValue) return;
        if(task.includes(inputValue)){
            setInputValue('')
            return;
        }

    
    setTask((prevTask)=>[...prevTask,inputValue])
    console.log(inputValue);
    setInputValue('');
    }


    return(
        <div style={{ textAlign:'center',backgroundColor:'lightGrey',border:'2px solid black',height:'60vh',margin:'20px'}}>
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
        <input  onChange={handleInput} type="text"value={inputValue}style={{padding:'10px', borderRadius:'10px'}} placeholder="New Task" />
        <button type="submit"style={{padding:'10px',margin:'10px', borderRadius:'10px'}}>Add Task</button>
        </form>
       
       <ul>
       {task.map((currValue,index)=>{
        return(
        <li key={index}>
            {currValue}

        </li>
      ) })}
       </ul>

        </div>

    )
}