import { Button } from '@mui/material'
import React, { useEffect } from 'react'

const Change = () => {
    var [value, setvalue] = useState("")
    const value1=() =>{
        setvalue("Karuna")
    }
    const value2=() =>{
        setvalue("Mubashir")
    }
    const value3=() =>{
        setvalue("George")
    }
    useEffect(() => {
        value1()
    },[])
        
        
  return (
    <div>
      <h3> welcome {value}</h3>
        <Button variant="contained" color="error" onClick={()=>setvalue('Karuna')}>Karuna</Button> &nbsp;&nbsp;
        <Button variant="contained" color="success" onClick={()=>setvalue('Mubashir')}>Mubashir</Button>&nbsp;&nbsp;
        <Button variant="contained" color="primary" onClick={()=>setvalue('George')}> George</Button>&nbsp;&nbsp;       
    </div>
  )
}

export default Change
