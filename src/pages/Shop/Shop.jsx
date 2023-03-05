import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://some-web-server.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <>
      <Typography variant="h3">Welcome to our store!</Typography>
      {products.length
        ? products.map((el) => (
            <Box>
              {el.make} {el.model} {el.price}
            </Box>
          ))
        : "No products found"}
    </>
  );
};

export default Shop;
