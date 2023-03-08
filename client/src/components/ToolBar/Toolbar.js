import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/common";
import {
  currentUserSelector,
  selectionModelSelector,
} from "../../store/selectors";
import { blockUsers, deleteUsers, unblockUsers } from "../../store/thunks";
import { setLogInStatus, setLogOut } from "../../store/slices/mainSlice";
import { Button, ButtonGroup, Box } from "@mui/material/";
import { DeleteOutlined, BlockOutlined, LockOpen } from "@mui/icons-material";
import { LOCALSTORAGEKEYS } from "../../constants/constants";

const Toolbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectionModel = useAppSelector(selectionModelSelector);
  const currentUser = useAppSelector(currentUserSelector);

  const logOut = () => {
    localStorage.removeItem(LOCALSTORAGEKEYS.TOKEN);
    dispatch(setLogOut());
    navigate("/");
  };

  const checkUserId = (selectedIds) => {
    for (let i = 0; i < selectedIds.length; i++) {
      const element = selectedIds[i];
      if (element === currentUser.id) logOut();
    }
  };

  const onBlock = async () => {
    checkUserId(selectionModel);
    dispatch(blockUsers(selectionModel));
  };

  const onUnBlock = async () => {
    checkUserId(selectionModel);
    dispatch(unblockUsers(selectionModel));
  };

  const onDelete = () => dispatch(deleteUsers(selectionModel, dispatch));

  const buttons = [
    <Button key="block" onClick={onBlock} startIcon={<BlockOutlined />}>
      Block
    </Button>,
    <Button key="unblock" onClick={onUnBlock} startIcon={<LockOpen />}>
      Unblock
    </Button>,
    <Button key="delete" onClick={onDelete} startIcon={<DeleteOutlined />}>
      Delete
    </Button>,
  ];

  return (
    <Box
      sx={{
        marginBottom: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
};
export default Toolbar;
