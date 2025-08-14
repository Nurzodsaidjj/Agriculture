import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { products } from "../../config/product-detail";

const ShopSingleMain = () => {
  const { id } = useParams();
  const data = products.find((item) => item.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <Typography variant="h6" color="error" textAlign="center">
        Product not found
      </Typography>
    );
  }

  const handleQuantityChange = (event) => {
    const value = Math.max(1, parseInt(event.target.value) || 1);
    setQuantity(value);
  };

  return (
    <Box
      sx={{
        padding: 4,
        maxWidth: "1300px",
        margin: "auto",
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box
        container
        spacing={4}
        alignItems="center "
        justifyContent="space-between"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: 4,
          padding: 8,
        }}
      >
        <Grid item xs={12} sm={5}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              overflow: "hidden",
              boxShadow: 2,
            }}
          >
            <img
              src={data.img}
              alt={data.name}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant="h5" color="primary" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="h6" color="text.primary" gutterBottom>
            ${data.price ? data.price.toFixed(2) : "11.00"}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {data.description ||
              "Soley dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1" color="text.primary">
              Quantity
            </Typography>
            <TextField
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              InputProps={{ inputProps: { min: 1 } }}
              sx={{ width: "60px" }}
            />
            <Button variant="contained" color="success">
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default ShopSingleMain;
