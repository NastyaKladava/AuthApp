import React from "react";
import {
  addMailReg,
  addPasswordReg,
  addUsernameReg,
} from "../../store/slices/signUpSlice";
import { registerUser } from "../../store/thunks";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { useRegister } from "../../hooks/registerHook";
import { useAppDispatch } from "../../hooks/common";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const { usernameReg, mailReg, passwordReg } = useRegister();

  const saveUser = (e) => {
    e.preventDefault();
    const userRegisterData = {
      userName: usernameReg,
      password: passwordReg,
      mail: mailReg,
    };

    dispatch(registerUser(userRegisterData));
  };

  return (
    <Grid item xs={12} sm={7} md={5}>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h3" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3, maxWidth: 400 }}
          onSubmit={saveUser}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="username"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                value={usernameReg}
                onChange={(e) => dispatch(addUsernameReg(e.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={mailReg}
                onChange={(e) => dispatch(addMailReg(e.target.value))}
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
                value={passwordReg}
                onChange={(e) => dispatch(addPasswordReg(e.target.value))}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default SignUp;
