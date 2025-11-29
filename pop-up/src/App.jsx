import { useState } from 'react'
import './App.css'
import Display from './component/Display'

function App() {
  const [pop, setPop] = useState(true);
  const [pop2, setPop2] = useState("");


  return (
    (pop ? (<div className='flex gap-8'>
      <button onClick={()=>{setPop(false); setPop2("edit")}}>Edit</button>
      <button onClick={()=>{setPop(false); setPop2("delete")}}>Delete</button>
    </div>) : 
    
    (<Display setPop= {setPop} pop2 = {pop2} />))
  )
}

export default App
