import actionTypes from "./action.types";

export const setTransfers = name => ({
  type: actionTypes.SET_TRANSFERS,
  payload: name,
});

export const setAllTransfers = () => ({
  type: actionTypes.SET_ALL_TRANSFERS
});

export const removeAllTransfers = () => ({
  type: actionTypes.REMOVE_ALL_TRANSFERS
});

