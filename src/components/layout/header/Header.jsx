import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
  Badge,
  Container,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logoSvg from "../../../assets/Logo.svg";
import searchIcon from "../../../assets/search-icon.svg"; 
import cartIconUrl from "../../../assets/cart-icon.svg";

export default function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={logoSvg}
              alt="Logo"
              sx={{ height: 40, cursor: "pointer" }}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 3 }}>
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Shop", path: "/shop" },
              { label: "ShopSingle", path: "/shopSingle" },
              { label: "News", path: "/news" },
            ].map((item) => (
              <Button
                key={item.label}
                component={RouterLink}
                to={item.path}
                color="primary"
                sx={{
                  fontWeight: 700,
                  textTransform: "none",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "20px"
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                borderRadius: "50px",
                overflow: "hidden",
                width: "280px",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Search"
                size="small"
                fullWidth
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  "& .MuiOutlinedInput-root": {
                    border: "none",
                    "& fieldset": { border: "none" },
                  },
                  "& .MuiInputBase-input": {
                    padding: "8px 16px",
                  },
                }}
              />
              <IconButton
                sx={{
                  color: "#4caf50",
                  borderRadius: "50%",
                  p: 1,
                  "&:hover": {
                    backgroundColor: "#c8e6c9",
                  },
                  width: 56,
                  height: 56,
                }}
              >
                <img src={searchIcon} alt="search" width={54} height={54} />
              </IconButton>
            </Box>

            <Button
              startIcon={
                <img
                  src={cartIconUrl}
                  alt="Cart"
                  style={{ width: 56, height: 56 }}
                />
              }
              sx={{
                textTransform: "none",
                px: 2,
                py: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              <Typography variant="body2" sx={{ fontFamily: "Roboto, sans-serif" }}>
                Cart
              </Typography>
              <Badge
                badgeContent={0}
                color="secondary"
                sx={{
                  "& .MuiBadge-badge": {
                    position: "static",
                    transform: "none",
                    backgroundColor: "#ffffff",
                    color: "#1976d2",
                    borderRadius: "50%",
                    minWidth: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
              />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
