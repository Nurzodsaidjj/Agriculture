import React from "react";
import { Box, Typography, Grid, Container, Checkbox } from "@mui/material";
import backgroundImage from "../../assets/why-choose-us-bg.png";
import PolicySvg from "../../assets/policy.svg";
import FreshSvg from "../../assets/fresh.svg"; // 100% Fresh ikonasini moslashtiring

const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "#f5f7f2", // Fond rangi tasvirga mos
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box maxWidth="680px">
              <Typography
                variant="h4"
                fontSize={"36px"}
                color="#7eb693"
                gutterBottom
              >
                Why Choose us?
              </Typography>
              <Typography
                variant="h5"
                fontSize={"40px"}
                fontWeight={800}
                color="#274c5b"
                gutterBottom
              >
                We do not buy from the open market & traders.
              </Typography>
              <Typography variant="body2" color="#666">
                Simply dummy text of the printing and typesetting industry.
                Lorem ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Typography
                    variant="body2"
                    color="#274c5b"
                    padding={"20px"}
                    backgroundColor={"#ececec"}
                    borderRadius={"49px"}
                  >
                    100% Natural Product
                  </Typography>
                </Box>
                <Typography variant="body2" color="#666" sx={{ ml: 4 }}>
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", mt: 2, mb: 1 }}
                >
                  <Typography
                    variant="body2"
                    color="#274c5b"
                    padding={"20px"}
                    backgroundColor={"#ececec"}
                    borderRadius={"49px"}
                  >
                    Increases resistance
                  </Typography>
                </Box>
                <Typography variant="body2" color="#666" sx={{ ml: 4 }}>
                  Fulfilling, and temptingly healthy, our Bion Organic Granola
                  with Wild Berries is just the thing
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                height: 400,
                borderRadius: 2,
                height: "600px",
                width: "690px",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ mt: 6, justifyContent: "center" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ width: { xs: "100%", sm: "50%", md: "25%" } }}
          >
            <Box
              sx={{
                p: 3,
                backgroundColor: "#fff",
                borderRadius: "30px",
                textAlign: "center",
                boxShadow: 1,
                width: "257px",
                height: "335px", // Kartalar balandligini tenglashtirish
              }}
            >
              <Box sx={{ mb: 2 }}>
                <img
                  src={PolicySvg}
                  alt="Return Policy"
                  style={{ width: 94, height: 94 }}
                />
              </Box>
              <Typography variant="h6" color="#274c5b" gutterBottom>
                Return Policy
              </Typography>
              <Typography variant="body2" color="#666">
                Simply dummy text of the printtypesetting industry.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ width: { xs: "100%", sm: "50%", md: "25%" } }}
          >
            <Box
              sx={{
                p: 3,
                backgroundColor: "#fff",
                borderRadius: "30px",
                textAlign: "center",
                boxShadow: 1,
                width: "257px",
                height: "335px", // Kartalar balandligini tenglashtirish
              }}
            >
              <Box sx={{ mb: 2 }}>
                <img
                  src={FreshSvg}
                  alt="100% Fresh"
                  style={{ width: 94, height: 94 }}
                />
              </Box>
              <Typography variant="h6" color="#274c5b" gutterBottom>
                100% Fresh
              </Typography>
              <Typography variant="body2" color="#666">
                Simply dummy text of the printtypesetting industry.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ width: { xs: "100%", sm: "50%", md: "25%" } }}
          >
            <Box
              sx={{
                p: 3,
                backgroundColor: "#fff",
                borderRadius: "30px",
                textAlign: "center",
                boxShadow: 1,
                height: "335px",
                width: "257px", // Kartalar balandligini tenglashtirish
              }}
            >
              <Box sx={{ mb: 2 }}>
                <img
                  src={PolicySvg}
                  alt="Support 24/7"
                  style={{ width: 94, height: 94 }}
                />
              </Box>
              <Typography variant="h6" color="#274c5b" gutterBottom>
                Support 24/7
              </Typography>
              <Typography variant="body2" color="#666">
                Simply dummy text of the printtypesetting industry.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ width: { xs: "100%", sm: "50%", md: "25%" } }}
          >
            <Box
              sx={{
                p: 3,
                backgroundColor: "#fff",
                borderRadius: "30px",
                textAlign: "center",
                boxShadow: 1,
                height: "335px",
                width: "257px", // Kartalar balandligini tenglashtirish
              }}
            >
              <Box sx={{ mb: 2 }}>
                <img
                  src={FreshSvg}
                  alt="Secured Payment"
                  style={{ width: 94, height: 94 }}
                />
              </Box>
              <Typography variant="h6" color="#274c5b" gutterBottom>
                Secured Payment
              </Typography>
              <Typography variant="body2" color="#666">
                Simply dummy text of the printtypesetting industry.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
