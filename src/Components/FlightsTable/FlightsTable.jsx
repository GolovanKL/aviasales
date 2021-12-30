import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import uniqid from "uniqid";
import Spin from 'antd/es/spin';
import 'antd/es/spin/style/css';

import Sorting from "../Sorting/Sorting";
import FlightCard from "../FlightCard/FlightCard";

import { fetchData } from "../../redux/mainSlice";
import dataToRender from "./ticketsHandlers";

import classes from './FlightsTable.module.scss';

function FlightsTable() {
  const dispatch = useDispatch();
  const { isLoading, tickets, transfers, activeSort, error } = useSelector(state => state.main);

  useEffect(() => {
    if (tickets.length === 0) dispatch(fetchData());
  }, [ tickets.length, dispatch]);

  const ticketsToRender = dataToRender(transfers, tickets, activeSort);

  const TicketsPage = () => {
    if (isLoading) {
      return <div className={classes.spin}><Spin size="large"/></div>;
    }

    if (error) {
      return <div className={classes.noTickets}>Проверьте интернет-соединение.</div>;
    }

    if (ticketsToRender.length === 0) {
      return <div className={classes.noTickets}>Рейсов, подходящих под заданные фильтры, не найдено.</div>;
    }

    return (
      ticketsToRender.map(({ carrier, price, segments }) => (
        <FlightCard key={uniqid()} carrier={carrier} price={price} segments={segments} />
      ))
    );
  };

  return (
    <div>
      <Sorting />
      <TicketsPage />
    </div>
  );
}

export default FlightsTable;

