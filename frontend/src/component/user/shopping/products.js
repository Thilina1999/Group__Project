import React, { useState, useEffect}from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const Products=()=>{
    const [products,setProducts]=useState([]);
    useEffect(() => {
        axios.get('/api/products').then((response)=>{
            setProducts(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);

  return (
    <div>
      <Grid container justify="center" ></Grid>
    </div>
  );
}

export default Products;