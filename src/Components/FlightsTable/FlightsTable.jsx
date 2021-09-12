import React, { useEffect } from "react";
import { connect } from "react-redux";
import uniqid from 'uniqid';
import PropTypes from 'prop-types';


import Sorting from "../Sorting/Sorting";
import FlightCard from "../FlightCard/FlightCard";

import { fetchData } from "../../redux/store.actions";
import dataToRender from "./ticketsHandlers";

function FlightsTable({isLoading, tickets, transfers, activeSort, fetchData}) {

  FlightsTable.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
    transfers: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeSort: PropTypes.string.isRequired,
    fetchData: PropTypes.func.isRequired
  }

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