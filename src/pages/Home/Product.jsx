import React from "react";
import { Box, Button,  Container, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { products } from "../../config/product-detail"; // O'zgartirilgan import yo'li
import { Grid_blocks, Grid_block } from "../../config/style";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Container>
      <Box sx={{ padding: 4, backgroundColor: "#fff", mb: "140px" }}>
        <Typography
          variant="h4"
          color="#7eb693"
          sx={{
            textAlign: "center",
            fontWeight: "400",
            mb: "8px",
            mt: "200px",
          }}
        >
          Categories
        </Typography>
        <Typography
          variant="h1"
          component="h2"
          gutterBottom
          align="center"
          sx={{ color: "#333", fontSize: "50px" }}
        >
          Our Products
        </Typography>
        <Grid_block>
          {products.slice(0, 8).map((item) => (
            <Link key={item.id} to={`/ShopSingle-Main/${item.id}`}>
              <Grid_blocks >
                <Box
                  sx={{
                    backgroundColor: "#274c5b",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "100px",
                    textAlign: "center",
                  }}
                >
                  {item.category}
                </Box>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "100%", height: "auto", marginTop: "10px" }}
                />
                <Box sx={{ mt: 1 }}>
                  <Typography variant="h6" sx={{ color: "#333" }}>
                    {item.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        textDecoration: "line-through",
                        color: "#999",
                        mr: 1,
                      }}
                    >
                      ${item.sale.toFixed(2)}
                    </Typography>
                    {item.salePrice ? (
                      <Typography
                        variant="body1"
                        sx={{ color: "#f57c00", fontWeight: "bold" }}
                      >
                        ${item.salePrice.toFixed(2)}
                      </Typography>
                    ) : (
                      <Typography
                        variant="body1"
                        sx={{ color: "#f57c00", fontWeight: "bold" }}
                      >
                        ${item.price.toFixed(2)}
                      </Typography>
                    )}
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    {Array.from({ length: Math.min(item.rating, 5) }).map(
                      (_, i) => (
                        <StarIcon
                          key={i}
                          sx={{ color: "#ffc107", fontSize: 16 }}
                        />
                      )
                    )}
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#333",
                      color: "#fff",
                      padding: "4px 8px",
                      borderRadius: "5px",
                      fontSize: "0.8rem",
                      mt: 1,
                      display: "inline-block",
                    }}
                  >
                    {item.category === "Health"
                      ? "Health"
                      : item.category === "Nuts"
                      ? "Nuts"
                      : "Fresh"}
                  </Box>
                </Box>
              </Grid_blocks>
            </Link>
          ))}
        </Grid_block>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            sx={{
              backgroundColor: "#333",
              color: "#fff",
              padding: "23px 46px",
              borderRadius: "16px",
            }}
          >
            Load More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
