import React from "react";
// import classes from "./FlightsTable.module.scss"
// import classNames from "classnames";
import Sorting from "../Sorting/Sorting";
import FlightItem from "../FlightItem/FlightItem";

export default function FlightsTable() {

  return (
    <div>
      <Sorting />
      <FlightItem />
    </div>
  )

}