import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';  
import { Grid } from '@mui/material';

const Cardget = () =>{
var[product,setProduct]=useState([])
axios.get("https://fakestoreapi.com/products")
.then((pro)=>{
  setProduct(pro.data)
  console.log(pro.data)
})  
  return (
     
    <div><br></br><br></br>
    <Grid container spacing={2}>
       {product.map((val) => {
        return(
      <Card sx={{ maxWidth: 345 }}>
      
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title="green iguana"
      />
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          {val.title} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
       )})}
        </Grid>
    </div>
  )
}

export default Cardget
