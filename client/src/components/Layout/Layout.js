import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
