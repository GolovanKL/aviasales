import React, { useEffect } from "react";
import { connect } from "react-redux";
import uniqid from 'uniqid';

import Sorting from "../Sorting/Sorting";
import FlightCard from "../FlightCard/FlightCard";

import { fetchData } from "../../redux/store.actions";
import dataToRender from "./ticketsHandlers";

function FlightsTable({isLoading, tickets, transfers, activeSort, fetchData}) {

  useEffect(() => {
    if (tickets.length === 0) fetchData()
  }, [ fetchData, tickets.length ]);

  const ticketsToRender = dataToRender(transfers, tickets, activeSort);

  return (
    <div>
      <Sorting/>
      {isLoading ?
        <div>Data is loading...</div> :
        ticketsToRender.map(({carrier, price, segments}) =>
          <FlightCard
            key={uniqid()}
            carrier={carrier}
            price={price}
            segments={segments}
          />)
      }
    </div>
  )
}

const mapDispatchToProps = {fetchData};

const mapStateToProps = ({isLoading, tickets, transfers, activeSort}) => ({isLoading, tickets, transfers, activeSort})

export default connect(mapStateToProps, mapDispatchToProps)(FlightsTable);