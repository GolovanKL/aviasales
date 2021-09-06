import React from "react";

import classes from './App.module.scss';

import Header from "../Header/Header";
import Transfers from "../Transfers/Transfers";
import FlightsTable from "../FlightsTable/FlightsTable";

function App() {

  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>
        <Transfers />
        <FlightsTable />
      </main>
    </div>
  )
}

export default App;
