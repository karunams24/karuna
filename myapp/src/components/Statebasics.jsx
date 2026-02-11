import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Statebasics = () => {
  var[name, setName] = useState("Karuna") 
  var[a,seta] = useState("")

  const inputHandler = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
          
  }
  const submitHandler = () => {
    seta(name)

  }

  return (
    <div>
        <h2>welcome {a}</h2>
        <TextField variant='outlined'onChange={inputHandler}/><br /><br />
        <Button variant='contained' color='success' onClick={submitHandler}>Submit</Button>

    </div>
  )
}

export default Statebasics
