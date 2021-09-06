import initial from "../InitialState/InitialState";

import actionTypes from "./action.types";

const reducer = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.SET_TRANSFERS:
      return {
        ...state,
        transfers: state.transfers.map(elem =>
          elem.name === action.payload ? {...elem, checked: !elem.checked} : elem
        )
      }
    case actionTypes.SET_ALL_TRANSFERS:
      return {
        ...state,
        transfers: state.transfers.map(elem => ({...elem, checked: true}))
      }
    case actionTypes.REMOVE_ALL_TRANSFERS:
      return {
        ...state,
        transfers: state.transfers.map(elem => ({...elem, checked: false}))
      }
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    case actionTypes.ADD_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload]
      }
    default: return state
  }
};

export default reducer;