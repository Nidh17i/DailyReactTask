import { ToggleMessage } from "./bonus";
import { Welcome,Student, Counter, ColorChanger, LoginStatus, FruitsList } from "./section2";
import {  TodoApp } from "./section3";

function App(){
  return(
    <>
    <Welcome/>
    <Student name="Rahul" course="React Fundamentals"/>
    <Counter/>
    <ColorChanger/>
    <LoginStatus/>
    <FruitsList/>
    <TodoApp/>
    <ToggleMessage/>
  

    </>
  )
}
export default App;