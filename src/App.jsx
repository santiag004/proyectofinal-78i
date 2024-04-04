import { useState } from 'react'
import './App.css'
import ViewContacto from './views/viewcontacto/ViewContacto';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ViewContacto/>
    </>
  )
}

export default App
