import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import initial from "../InitialState/InitialState";

const mainSlice = createSlice({
  name: "main",
  initialState: initial,
  reducers: {
    setTransfers(state, action) {
      state.transfers = state.transfers.map(elem =>
        elem.name === action.payload ? {...elem, checked: !elem.checked} : elem
      )
    },

    setAllTransfers(state) {
      console.log('setAllTransfers');
      state.transfers = state.transfers.map(elem => ({...elem, checked: true}))
    },

    removeAllTransfers(state) {
      state.transfers = state.transfers.map(elem => ({...elem, checked: false}))
    },

    setLoading(state, action) {
      state.isLoading = action.payload;
    },

    addTickets(state, action) {
      state.tickets = [...state.tickets, ...action.payload]
    },

    setSorting(state, action) {
      state.activeSort = action.payload;
      state.sorts = state.sorts.map(sort => (sort.name === action.payload ?
        {...sort, active: true} : {...sort, active: false}))
    },

    setError(state, action) {
      state.error = action.payload;
    }
  },
});

export const {
  setTransfers,
  setAllTransfers,
  removeAllTransfers,
  setLoading,
  addTickets,
  setSorting,
  setError
} = mainSlice.actions;


export const fetchData = createAsyncThunk(
  'main/fetchData',
  async function (_, {dispatch}) {
    let loading = true;

    const getData = async (searchId) => axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then(({data}) => {
        console.log(data.tickets);
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

    await axios.get('https://front-test.beta.aviasales.ru/search')
      .then(({data: {searchId}}) => {
        console.log(searchId);
        getData(searchId)
      })
      .catch((error) => {
        dispatch(setError(error.message));
        dispatch(setLoading(false));
      });
  }
)

export default mainSlice.reducer;