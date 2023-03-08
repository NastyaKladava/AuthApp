import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/common";
import { isLoggedInSelector } from "../../store/selectors";
import { setLogOut } from "../../store/slices/mainSlice";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material";
import { Link as Routerlink } from "react-router-dom";
import { LOCALSTORAGEKEYS } from "../../constants/constants";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  const logOut = () => {
    localStorage.removeItem(LOCALSTORAGEKEYS.TOKEN);
    dispatch(setLogOut());
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ flexGrow: 1, justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "130px",
            }}
          >
            <Link
              color="inherit"
              component={Routerlink}
              to="/"
              underline="hover"
            >
              Home
            </Link>
            <Link
              color="inherit"
              component={Routerlink}
              to="/users"
              underline="hover"
            >
              Users
            </Link>
          </Box>
          {isLoggedIn && (
            <Button
              color="inherit"
              type="button"
              variant="outlined"
              size="small"
              startIcon={<LogoutIcon />}
              onClick={logOut}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Typography component="h1" variant="h1" align="center" mb={2}>
        Authentification App
      </Typography>
    </Box>
  );
};

export default Header;
