import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Data from './components/Data'
import Statebasics from './components/Statebasics'
import Count from './components/Count'
import Names from './components/Names'
import Change from './components/Change'    
import { Card } from '@mui/material'
import Cardget from './components/Cardget'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     <NavBar/>
     <Routes>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Data" element={<Data/>} />
      <Route path="/state" element={<Statebasics/>} />
      <Route path="/count" element={<Count/>} />
      <Route path="/name" element={<Names/>} />
      <Route path="/change" element={<Change/>} />
      <Route path="/cardget" element={<Cardget/>} />
     </Routes>
     
    
 
    </>
  )
}

export default App
