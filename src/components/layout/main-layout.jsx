import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./footer/footer";
import Header from "./header/Header";


export function Layout() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      < Header/>

      <Box component="main" sx={{ flexGrow: 1, pt: 10 }}>
          <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
