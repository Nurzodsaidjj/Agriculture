import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import FruitsImg from "../../assets/about.png";
import AboutPost from "/src/assets/about-post.svg";
import PostIcon from "../../assets/about-icon.svg";
export default function AboutSection() {
  return (
    <Box sx={{ backgroundColor: "#f9f8f8", width: "100%" }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            minHeight: "500px",
          }}
        >
          {/* Chap Tomon: Rasm */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={FruitsImg}
              alt="Fruits"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: { xs: 2, md: 4 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: " #7eb693",
                fontSize: "2.25rem",
                mb: 1,
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: "#274c5b",
                fontSize: "50px",
                fontWeight: "800",
                mb: 2,
              }}
            >
              We Believe in Working Accredited Farmers
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#525c60",
                mb: 3,
                fontSize: "18px",
                lineHeight: "165%",
              }}
            >
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <img src={PostIcon} alt=" Post" />{" "}
              <Box>
                <Typography
                  sx={{ color: "#274c5b", fontSize: "25px", fontWeight: "800" }}
                >
                  Organic Foods Only
                </Typography>
                <Typography
                  sx={{ color: "#274c5b", fontSize: "18px", fontWeight: "400" }}
                >
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
              <img src={AboutPost} alt="About Post" />{" "}
              <Box>
                <Typography
                  sx={{ color: "#274c5b", fontSize: "25px", fontWeight: "800" }}
                >
                  Quality Standards
                </Typography>
                <Typography
                  sx={{ color: "#274c5b", fontSize: "18px", fontWeight: "400" }}
                >
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </Typography>
              </Box>
            </Box>

            <Button
              sx={{
                backgroundColor: " #274c5b",
                color: "#fff",
                fontSize: "20px",
                fontWeight: "700",
                borderRadius: "16px",
                textTransform: "none",
                padding: "28px 49px",
                mt: 3,
                "&:hover": { backgroundColor: "#1b5e20" },
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
