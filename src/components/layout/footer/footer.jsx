import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  Link
} from "@mui/material";
import { Instagram, Facebook, Twitter, Pinterest } from "@mui/icons-material";
import FooterImg from "../../../assets/Footer.jpg";
import MainLogo from "../../../assets/Logo.svg";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "#fff", mt: 8 }}>
      {/* Newsletter */}
      <Box sx={{ display: "flex", justifyContent: "center", bgcolor: "#fff" }}>
        <Box
          sx={{
            backgroundImage: `url(${FooterImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            py: "100px",
            width: "100%",
            maxWidth: "1200px",
            borderRadius: "16px",
          }}
        >
          <Container>
            <Grid
              container
              spacing={3}
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: "50px" }}
            >
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: "50px",
                    wordBreak: "break-word",
                    maxWidth: "500px",
                  }}
                >
                  Subscribe to our Newsletter.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    bgcolor: "#fff",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <TextField
                    placeholder="Your Email Address"
                    variant="outlined"
                    fullWidth
                    sx={{ bgcolor: "#fff", "& fieldset": { border: "none" } }}
                  />
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#000", color: "#fff", borderRadius: 0 }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* Main Footer Content */}
      <Container
        maxWidth="lg"
        sx={{ py: 6, display: "flex", justifyContent: "center" }}
      >
        <Grid container spacing={4}>
          {/* Contact Us */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography>Email: needhelp@Organia.com</Typography>
            <Typography>Phone: 666 888 888</Typography>
            <Typography>Address: 88 road, borklyn street, USA</Typography>
          </Grid>

          {/* Logo + Social */}
          <Grid item xs={12} md={4} textAlign="center">
         <Link to="/About" style={{ textDecoration: "none" }}>
      <Box
        component="img"
        src={MainLogo}
        alt="Logo"
        sx={{ height: 50, cursor: "pointer" }}
      />
    </Link>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Simply dummy text of the printing and typesetting industry.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton>
                <Instagram />
              </IconButton>
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <Pinterest />
              </IconButton>
            </Box>
          </Grid>

          {/* Utility Pages */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Utility Pages
            </Typography>
            <Typography>Style Guide</Typography>
            <Typography>404 Not Found</Typography>
            <Typography>Password Protected</Typography>
            <Typography>Licences</Typography>
            <Typography>Changelog</Typography>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* Bottom */}
      <Box
        sx={{ textAlign: "center", py: 2, fontSize: "14px", bgcolor: "#fff" }}
      >
        Copyright © Organick | Designed by VictorFlow Templates - Powered by
        Webflow
      </Box>
    </Box>
  );
};

export default Footer;
