import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const product = () => {
  return (
    <div>
      <Card>
        <CardMedia image={product.imageurl} title={product.productname} />
      </Card>
    </div>
  );
}

export default product;