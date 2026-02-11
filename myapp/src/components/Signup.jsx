import {  Avatar, Button, TextField } from '@mui/material'
import React from 'react'


const Signup = () => {
  return (
    <div>
      <h2>Signup page</h2><center>
        <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s" sx={{width:100,height:100}}/><br /><br />
      </center>
    <TextField id="outlined-basic" label="User Name" variant="outlined" /><br /><br />
    <TextField id="filled-basic" type="password"label="Password" variant="filled" /><br /><br />
    <Button variant="contained" color="success">
         SignUp
</Button>

    </div>
  )
}

export default Signup
