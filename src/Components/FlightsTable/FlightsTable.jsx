import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Spin} from 'antd';

import Sorting from "../Sorting/Sorting";
import FlightCard from "../FlightCard/FlightCard";

import {setLoading, addTickets} from "../../redux/store.actions";

// import classes from './FlightsTable.module.scss'

function FlightsTable({isLoading, setLoading, addTickets, tickets, transfers}) {

  let data = [];

  useEffect(() => {
    const getData = async (searchId) => {
      try {
        return fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
          .then(res => res.json())
          .then(body => {
            data = [...data, ...body.tickets];
            if (!body.stop) {
              getData(searchId)
            } else {
              addTickets(data);
              setLoading(false);
            }
          }).catch(() => getData(searchId))
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(true);
    try {
      fetch('https://front-test.beta.aviasales.ru/search').then(res => res.json())
        .then(body => getData(body.searchId));
    } catch (error) {
      console.error(error);
    }
  }, [setLoading, addTickets]);

const ticketsToRender = () => {
  if (transfers[0].checked) return tickets.slice(0, 5);
  let result = [];
  transfers.slice(1).forEach(elem => {
    if (elem.checked) {
      result = [...result, ...tickets.slice(0, 100).filter(ticket => {
        const maxStops = Math.max(ticket.segments[0].stops.length, ticket.segments[1].stops.length);
        if (elem.stops === maxStops) return ticket})
      ]
    }
  })
  return result.slice(0, 5);
};

  return (
    <div>
      <Sorting/>
      {isLoading ?
        <Spin size="large"/> :
        ticketsToRender().map(({carrier, price, segments}) =>
          <FlightCard carrier={carrier} price={price} segments={segments}/> )
      }
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setLoading: (state) => dispatch(setLoading(state)),
  addTickets: tickets => dispatch(addTickets(tickets))
})

const mapStateToProps = ({isLoading, tickets, transfers}) => ({isLoading, tickets, transfers})

export default connect(mapStateToProps, mapDispatchToProps)(FlightsTable);