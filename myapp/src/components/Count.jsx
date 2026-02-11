import { Button } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {
    var[count, setCount] =useState(0)
    


      return (
    
    <div>
      <h2>Count {count}</h2>
      <Button variant="contained" color="error"onClick={() => setCount(count + 1)}>Add</Button> &nbsp;&nbsp;
      <Button variant="contained" color="success" onClick={() => setCount(count - 1)}>Deduct</Button>
    </div>
  )
  
}

export default Count
