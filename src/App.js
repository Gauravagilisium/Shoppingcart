import "./styles.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Cart from "./Cart";
export default function App() {
  const [products, setProducts] = useState();
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const handleAddCart = (item) => {
    setCartProducts((prev) => [...prev, item]);
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          maxwidth: "50%",
          float: "right"
        }}
      >
        <Button size="small" color="primary" variant="contained">
          CartItems{cartProducts.length}
        </Button>
        <Cart data={cartProducts} />
      </div>
      <div style={{ maxwidth: "50%" }}>
        {products &&
          products.map((item, index) => {
            // console.log(item);
            return (
              <div style={{ maxwidth: "50%", float: "left" }}>
                <Card sx={{ maxWidth: "50%" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      onClick={() => {
                        handleAddCart(item);
                      }}
                    >
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
}
