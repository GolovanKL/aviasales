import React, { useEffect } from "react";
import { connect } from "react-redux";
import uniqid from "uniqid";
import PropTypes from "prop-types";
import Spin from 'antd/es/spin';
import 'antd/es/spin/style/css';

import Sorting from "../Sorting/Sorting";
import FlightCard from "../FlightCard/FlightCard";

import { fetchData } from "../../redux/store.actions";
import dataToRender from "./ticketsHandlers";

import classes from './FlightsTable.module.scss';

function FlightsTable({ isLoading, tickets, transfers, activeSort, fetchData, error }) {
  FlightsTable.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
    transfers: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeSort: PropTypes.string.isRequired,
    fetchData: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
  };

  useEffect(() => {
    if (tickets.length === 0) fetchData();
  }, [fetchData, tickets.length]);

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

const mapDispatchToProps = { fetchData };

const mapStateToProps = ({ isLoading, tickets, transfers, activeSort, error }) => ({
  isLoading,
  tickets,
  transfers,
  activeSort,
  error,
});

export default connect(mapStateToProps, mapDispatchToProps)(FlightsTable);
