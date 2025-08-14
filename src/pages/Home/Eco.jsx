import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import EcoImage from "../../assets/Eco.jpg";

const OrganicStore = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#f9f9f9",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Chap qism: Rasm */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 900,
                overflow: "hidden",
                backgroundImage: `url(${EcoImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width:"800px"
                
              }}
            ></Box>
          </Grid>

          {/* O‘ng qism: Matn */}
          <Grid maxWidth={600}>
            <Typography
              variant="h4"
              color="#7eb693"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Eco Friendly
            </Typography>
            <Typography  gutterBottom sx={{fontSize:"50px", fontWeight:"800", color:"#274c5b"}}>
              Econis is a Friendly Organic Store
            </Typography>

            <Typography  color="text.secondary">
              <strong style={{fontSize:"25px"}}>Start with Our Company First</strong>
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </Typography>

            <Typography  color="text.secondary">
              <strong style={{fontSize:"22px", color:"#274c5b"}}>Learn How to Grow Yourself</strong>
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </Typography>

            <Typography  color="text.secondary" >
              <strong style={{fontSize:"25px"}}>Farming Strategies of Today</strong>
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OrganicStore;
