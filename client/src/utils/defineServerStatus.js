export const isServerError = (action) => {
  return action.type.endsWith("rejected");
};

export const isServerLoading = (action) => {
  return action.type.endsWith("pending");
};

export const isServerSuccess = (action) => {
  return action.type.endsWith("fulfilled");
};
