import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Container,
} from "@mui/material";
import CustomerBg from "../../assets/Customer.png";
import avatarImg from "../../assets/customer-person.png";

const Customer = () => {
  return (
      <Box
        sx={{
          minHeight: "400px", 
          backgroundImage: `url(${CustomerBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          overflow: "hidden",
        }}
      >
        <Container>
          <Box
          sx={{
            textAlign: "center",
            width: "100%",
            maxWidth: "600px",
            marginLeft:'auto', marginRight:"auto" 
          }}
        >
          <Typography variant="h4" color="green" gutterBottom>
            Testimonial
          </Typography>
          <Typography variant="h3" component="h2" color="#274c5b" gutterBottom>
            What Our Customer Saying?
          </Typography>
          <Card
            sx={{
              maxWidth: 780,
              margin: "0 auto",
              p: 2,
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Avatar
                  alt="Sara Taylor"
                  src={avatarImg} 
                  sx={{ width: 115, height: 115 }}
                />{" "}
              </Box>
              
             <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
             
              <Typography
                variant="h1"
                color="text.secondary"
                sx={{ fontSize: "18px", fontWeight: "400", lineHeight: "165%" }}
              >
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </Typography>
              <Typography variant="subtitle1" color="#274c5b" fontWeight="bold">
                Sara Taylor
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Customer
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            padding: 2,
            mt: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 211,
              height: 211,
              border: '5px solid #a9c9a4',
              borderRadius: '50%',
              backgroundColor: '#fff',
              textAlign: 'center',
            }}
          >
            <Typography variant="h3" color="#274c5b" sx={{ fontWeight: 'bold', fontSize:"50px" }}>
              100%
            </Typography>
            <Typography variant="body2" color="green">
              Organic
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 211,
              height: 211,
              border: '5px solid #a9c9a4',
              borderRadius: '50%',
              backgroundColor: '#fff',
              textAlign: 'center',
            }}
          >
            <Typography variant="h3" color="#274c5b" sx={{ fontWeight: 'bold', fontSize:"50px" }}>
              285
            </Typography>
            <Typography variant="body2" color="green">
              Active Product
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 211,
              height: 211,
              border: '5px solid #7eb693',
              borderRadius: '50%',
              backgroundColor: '#fff',
              textAlign: 'center',
            }}
          >
            <Typography variant="h3" color="#274c5b" sx={{ fontWeight: 'bold', fontSize:"50px" }}>
              350+
            </Typography>
            <Typography variant="body2" color="green">
              Organic Orchards
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 211,
              height: 211,
              border: '5px solid #a9c9a4',
              borderRadius: '50%',
              backgroundColor: '#fff',
              textAlign: 'center',
            }}
          >
            <Typography variant="h3" color="#274c5b" sx={{ fontWeight: 'bold', fontSize:"50px" }}>
              25+
            </Typography>
            <Typography variant="body2" color="green">
              Years of Farming
            </Typography>
          </Box>
        </Box>
        </Container>
      </Box>

  );
};

export default Customer;