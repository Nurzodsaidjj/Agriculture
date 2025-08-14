import React from "react";
import { Box, Typography, Container, Button, Card, CardContent, Rating } from "@mui/material";
import { Grid_block, Grid_blocks } from "../../config/style";
import { products } from "../../config/product-detail";

export default function Offer() {
  return (
    <Box sx={{ py: "100px", width: "100%", backgroundColor: "#274c5b" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            
            pb: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h4"
              color="#7eb693"
              gutterBottom
              sx={{ fontSize: "36px", fontWeight: "400" }}
            >
              Offer
            </Typography>
            <Typography
              variant="h3"
              color="#fff"
              gutterBottom
              sx={{ fontSize: "50px", fontWeight: "800" }}
            >
              We Offer Organic For You
            </Typography>
          </Box>
          <Button
            sx={{
              bgcolor: "#efd372",
              color: "#274c5b",
              borderRadius: "16px",
              fontSize: "20px",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: "700",
              padding: "25px 39px",
            }}
          >
            View All Product
          </Button>
        </Box>
        <Box>
          <Grid_block>
            {products.slice(0, 4).map((item) => (
              <Card
                key={item.id}
                sx={{
                  width: "100%", // Kartaning kengligini moslashtirish
                  maxWidth: 300, // Maksimal kenglik
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Avvalgi kartalarga o'xshash shadow
                  borderRadius: 2,
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      backgroundColor: "#274c5b",
                      color: "#fff",
                      padding: "10px",
                      borderRadius: "5px 5px 0 0",
                      width: "100%",
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
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ color: "#333" }}>
                      {item.name}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      <Typography
                        variant="body2"
                        sx={{ textDecoration: "line-through", color: "#999", mr: 1 }}
                      >
                        ${item.sale.toFixed(2)}
                      </Typography>
                      {item.salePrice ? (
                        <Typography variant="body1" sx={{ color: "#f57c00", fontWeight: "bold" }}>
                          ${item.salePrice.toFixed(2)}
                        </Typography>
                      ) : (
                        <Typography variant="body1" sx={{ color: "#f57c00", fontWeight: "bold" }}>
                          ${item.price.toFixed(2)}
                        </Typography>
                      )}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      <Rating
                        name="read-only-rating"
                        value={Math.min(item.rating, 5)}
                        readOnly
                        precision={0.5}
                        sx={{ color: "#ffd700" }}
                      />
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
                </CardContent>
              </Card>
            ))}
          </Grid_block>
        </Box>
      </Container>
    </Box>
  );
}