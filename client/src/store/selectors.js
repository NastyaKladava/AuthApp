//main
export const usersSelector = (store) => store.main.users;
export const currentUserSelector = (store) => store.main.currentUser;
export const isShowSignInSelector = (store) => store.main.isShowSignIn;
export const isShowSnackbarSelector = (store) => store.main.isShowSnackbar;
export const isLoggedInSelector = (store) => store.main.isLoggedIn;
export const isSignedUpSelector = (store) => store.main.isSignedUp;
export const isErrorSelector = (store) => store.main.isError;
export const isSucceessSelector = (store) => store.main.isSuccess;
export const logInMessageSelector = (store) => store.main.logInMessage;
export const selectionModelSelector = (store) => store.main.selectionModel;
export const succeessMessageSelector = (store) => store.main.successMessage;
export const errorMessageSelector = (store) => store.main.errorMessage;

//signUpData
export const usernameRegSelector = (store) => store.signUp.usernameReg;
export const passwordRegSelector = (store) => store.signUp.passwordReg;
export const mailRegSelector = (store) => store.signUp.mailReg;

//signInData
export const passwordLogInSelector = (store) => store.signIn.passwordLog;
export const mailLogInSelector = (store) => store.signIn.mailLog;
