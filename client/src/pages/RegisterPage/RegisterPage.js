import React from "react";
import SignUp from "../../components/SignUp/SignUp";
import { Button, Typography, Grid } from "@mui/material";
import { useRegister } from "../../hooks/registerHook";
import AppSnackbar from "../../components/Popovers/AppSnackbar";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { successMessage, isSuccess, errorMessage, isError } = useRegister();

  const handleOpen = () => navigate("/login");

  console.log(successMessage);
  console.log(errorMessage);

  return (
    <>
      <Grid
        item
        xs={12}
        columnGap={5}
        sx={{
          maxWidth: "lg",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Grid
          sm={6}
          md={6}
          item
          sx={{
            flexDirection: "column",
            p: 6,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            backgroundColor: "#c5cae9",
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            textAlign="center"
            sx={{ marginBottom: 5 }}
          >
            Welcome back!
          </Typography>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleOpen}
          >
            Sign In
          </Button>
        </Grid>
        <SignUp />
      </Grid>
      {successMessage && (
        <AppSnackbar message={successMessage} severity="success" />
      )}
      {errorMessage && <AppSnackbar message={errorMessage} severity="error" />}
    </>
  );
};
export default RegisterPage;
