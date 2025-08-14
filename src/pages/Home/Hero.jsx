import { Box, Typography, Button, Container } from "@mui/material";
import heroBg from "../../assets/Hero.jpg";
import React, { useEffect, useState } from "react";
import AboutImg from "../../assets/About-page.png";
import ShopImg from "../../assets/shop.png";
import ShopSingle from "../../assets/shop-single.png";

export default function Hero({
  page,
  height = "450px",
  title,
  subtitle,
  showButton = true,
}) {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (page === "about") {
      setImgUrl(AboutImg);
    }
    if (page === "home") {
      setImgUrl(heroBg);
    }
    if (page === "shop") {
      setImgUrl(ShopImg);
    }
    // if (page === "shopSingle") {
    //   setImgUrl(ShopSingle);
    // }
  }, [page]);

  return (
    <Box
      sx={{
        height,
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        mb: "154px",
      }}
    >
      {/* Overlay (agar fon ustiga effekt kerak bo‘lsa) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      {/* Content */}
     <Container
  sx={{
    position: "relative",
    zIndex: 1,
    display: ["about", "shop"].includes(page) ? "flex" : "block",
    alignItems: "center",
    justifyContent: ["about", "shop"].includes(page) ? "center" : "flex-start",
    textAlign: ["about", "shop"].includes(page) ? "center" : "left",
    flexDirection: "column",
  }}
>

        {subtitle && (
          <Typography
            variant="h4"
            sx={{
              color: "#68a47f",
              fontSize: "2.25rem",
              fontWeight: 400,
            }}
          >
            {subtitle}
          </Typography>
        )}

        {title && (
          <Typography
            variant="h1"
            sx={{
              my: 2,
              maxWidth: "500px",
              fontSize: "62px",
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
        )}

        {showButton && (
          <Button
            sx={{
              bgcolor: "#efd372",
              borderRadius: "16px",
              fontSize: "20px",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 700,
              padding: "25px 39px",
              mt: "23px",
            }}
          >
            EXPLORE NOW
          </Button>
        )}
      </Container>
    </Box>
  );
}
