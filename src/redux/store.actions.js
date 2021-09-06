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

export const setLoading = (state) => ({
  type: actionTypes.SET_LOADING,
  payload: state,
});

export const addTickets = tickets => ({
  type: actionTypes.ADD_TICKETS,
  payload: tickets
});

