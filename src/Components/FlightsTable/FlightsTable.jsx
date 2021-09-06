import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Spin} from 'antd';

import Sorting from "../Sorting/Sorting";
import FlightCard from "../FlightCard/FlightCard";

import {setLoading, addTickets} from "../../redux/store.actions";

// import classes from './FlightsTable.module.scss'

function FlightsTable({isLoading, setLoading, addTickets, tickets, transfers}) {

  useEffect(() => {
    const getData = async (searchId) => {
      try {
        return fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
          .then(res => res.json())
          .then(body => {
            addTickets(body.tickets);
            if (!body.stop) {
              getData(searchId)
            } else {
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
  if (transfers[0].checked) return tickets;
  let result = [];
  transfers.slice(1).forEach(elem => {
    if (elem.checked) {
      console.log(elem.stops);
      result = [...result, ...tickets.slice(0, 25).filter(ticket => {
        const maxStops = Math.max(ticket.segments[0].stops.length, ticket.segments[1].stops.length);
        if (elem.stops === maxStops) return ticket})
      ]
    }
  })
  return result;
};

  console.log(ticketsToRender());



  return (
    <div>
      <Sorting/>
      {isLoading ?
        <Spin size="large"/> :
        tickets.slice(0, 5).map(() => <FlightCard/>)
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