export const USERTABLECOLUMNS = [
  { field: "userName", headerName: "UserName", minWidth: 130, flex: 1 },
  { field: "mail", headerName: "Mail", minWidth: 130, flex: 1 },
  { field: "userStatus", headerName: "Status", width: 130 },
  {
    field: "createdAt",
    headerName: "Registration date",
    type: "date",
    width: 170,
    valueGetter: ({ value }) => value && new Date(value),
  },
  {
    field: "updatedAt",
    headerName: "Last log date",
    type: "date",
    width: 170,
    valueGetter: ({ value }) => value && new Date(value),
  },
];

export const SNACKBARHIDE = 2000;
export const SNACKBARTIMER = 2000;
export const TIMERDELAY = 2000;

export const LOCALSTORAGEKEYS = {
  TOKEN: "accessToken",
};
