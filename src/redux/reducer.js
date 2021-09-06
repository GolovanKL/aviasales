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
    default: return state
  }
};

export default reducer;