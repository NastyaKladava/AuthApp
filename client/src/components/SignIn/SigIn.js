import React from "react";
import { Link } from "react-router-dom";
import { addMailLog, addPasswordLog } from "../../store/slices/signInSlice";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { useRegister } from "../../hooks/registerHook";
import { loginUser } from "../../store/thunks";
import { useAppDispatch } from "../../hooks/common";
import AppSnackbar from "../Popovers/AppSnackbar";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const { passwordLog, mailLog, errorMessage, successMessage } = useRegister();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const userLoginData = {
      password: passwordLog,
      mail: mailLog,
    };
    dispatch(loginUser(userLoginData));
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            p: 3,
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            border: "1px, solid, #000",
            maxWidth: "400px",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        >
          <Typography component="h2" variant="h5">
            Sign In
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleLoginUser}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={mailLog}
                  onChange={(e) => dispatch(addMailLog(e.target.value))}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={passwordLog}
                  onChange={(e) => dispatch(addPasswordLog(e.target.value))}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Typography textAlign={"center"}>
              {"Don't have an account? "}
            </Typography>
            <Link to={"/"} style={{ textDecoration: "none", color: "#3d5afe" }}>
              <Typography
                sx={{
                  textAlign: "center",
                }}
              >
                {"Sign Up"}
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      {successMessage && (
        <AppSnackbar message={successMessage} severity="success" />
      )}
      {errorMessage && <AppSnackbar message={errorMessage} severity="error" />}
    </>
  );
};
export default SignIn;
