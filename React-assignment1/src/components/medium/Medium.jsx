// ## 🟡 Medium Level (5 Questions)

import { Parent } from "./Question1/Parent"

// 1. **Props + State Combo**
//    Create a `UserCard` component that accepts `name` and `age` as props.
//    In the parent, keep a list of 3 users in state and render multiple `UserCard`s dynamically.

// 2. **Parent → Child Communication**
//    Pass a number as prop from parent to child and display it in the child.
//    Add a button in the parent that updates that number and observe the child re-render.

// 3. **Child → Parent Communication**
//    In the child component, have a button that triggers a function passed from the parent via props to update the parent’s state.

// 4. **useEffect Introduction**
//    Display a message in the console every time a number in state changes using `useEffect`.

// 5. **Toggle UI Using Synthetic Events**
//    Create a button that toggles between showing and hiding a `<p>` tag with the message “Hello React”.

//1

export const Medium=()=>{
    return(
        <>
        <Parent/>
        </>
    )
}