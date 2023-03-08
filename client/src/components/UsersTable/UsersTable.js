import React from "react";
import { setselectionModel } from "../../store/slices/mainSlice";
import { USERTABLECOLUMNS } from "../../constants/constants";
import { DataGrid } from "@mui/x-data-grid";
import { useUsers } from "../../hooks/usersHook";
import { useAppDispatch, useAppSelector } from "../../hooks/common";
import { selectionModelSelector, usersSelector } from "../../store/selectors";

const UsersTable = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(usersSelector);
  const selectionModel = useAppSelector(selectionModelSelector);
  const onChange = (newSelModel) => dispatch(setselectionModel(newSelModel));

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={USERTABLECOLUMNS}
        getRowId={(row) => row._id}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={onChange}
        selectionModel={selectionModel}
      />
    </div>
  );
};
export default UsersTable;
