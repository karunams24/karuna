import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, Links } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" >
        <Toolbar>
            <Typography variant="contained" color="inherit">
                MyApp 
               
            </Typography>
            <Link to="/login">
                <Button color="inherit">Login</Button></Link>
                <Link to="/signup">
                <Button color="inherit">Signup</Button></Link>
                <Link to="/Data">
                <Button color="inherit">Data</Button></Link>
                <Link to="/state">
                <Button color="inherit">State Basics</Button></Link>
                 <Link to="/count">
                <Button color="inherit">Count</Button></Link>
                    <Link to="/name">
                <Button color="inherit">Names</Button></Link>
                 <Link to="/change">
                <Button color="inherit">Change</Button></Link>
                <Link to="/cardget">
                <Button color="inherit">Card Get</Button></Link>
        </Toolbar>

      </AppBar>
    </div>
  )
}

export default NavBar
