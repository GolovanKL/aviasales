import axios from "axios";
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

export const setSorting = name => ({
  type: actionTypes.SET_SORTING,
  payload: name
});

const setError = message => ({
  type: actionTypes.SET_ERROR,
  payload: message
})

export const fetchData = () => (dispatch) => {

  let loading = true;

  const getData = async (searchId) => axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then(({data}) => {
        dispatch(addTickets(data.tickets));
        if (loading) {
          dispatch(setLoading(false));
          loading = false;
        }
        if (!data.stop) getData(searchId);
      }).catch((error) => {
        if (error.response.status === 500) {
          getData(searchId);
        } else {
          dispatch(setLoading(false));
          dispatch(setError(error.message));
        }
      });

  dispatch(setLoading(true));

  axios.get('https://front-test.beta.aviasales.ru/search')
    .then(({data: {searchId}}) => getData(searchId))
    .catch((error) => {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    });
}

