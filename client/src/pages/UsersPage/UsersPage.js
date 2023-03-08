import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/common";
import { usersSelector } from "../../store/selectors";
import { getUsers } from "../../store/thunks";
import UsersTable from "../../components/UsersTable/UsersTable";
import Toolbar from "../../components/ToolBar/Toolbar";
import { Typography } from "@mui/material";
import { useUsers } from "../../hooks/usersHook";

const UsersPage = () => {
  const { users } = useUsers();

  return (
    <>
      {users.length > 0 ? (
        <>
          <Toolbar />
          <UsersTable />
        </>
      ) : (
        <Typography align="center">There is no users' data</Typography>
      )}
    </>
  );
};

export default UsersPage;
