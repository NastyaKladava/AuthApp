import React from "react";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/common";
import { SNACKBARHIDE } from "../../constants/constants";
import { showSnackbar } from "../../store/slices/mainSlice";
import { isShowSnackbarSelector } from "../../store/selectors";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AppSnackbar = ({ severity, message }) => {
  const dispatch = useAppDispatch();
  const isShowSnackbar = useAppSelector(isShowSnackbarSelector);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(showSnackbar(false));
  };

  return (
    <Snackbar
      open={isShowSnackbar}
      autoHideDuration={SNACKBARHIDE}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;
