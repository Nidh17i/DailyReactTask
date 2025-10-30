import Person, { FormEvent, IncdecNumber, Welcome } from "./components/easy/basic"
import { Medium } from "./components/medium/Medium"


function App() {


  return (
    <>
     <Person/>
     <Welcome name='Nidhi'/>
     <Welcome name='Anuja'/>
     <Welcome name='JOJO'/>
     <IncdecNumber/>
     <FormEvent/>
     <Medium/>
    </>
  )
}

export default App
