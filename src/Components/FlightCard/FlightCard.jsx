import React from 'react';

import Route from "../Route/Route";

import classes from './FlightCard.module.scss'

export default function FlightCard({carrier, price, segments}) {

  const carrierLogo = `https://pics.avs.io/99/36/${carrier}.png`;

  return (
    <div className={classes.flight_item}>
      <div className={classes.price}>
        <span className={classes.price_amount}>{price.toLocaleString('ru-RU')} Р</span>
        <img src={carrierLogo} alt="carrierLogo"/>
      </div>
      <Route segment={segments[0]}/>
      <Route segment={segments[1]}/>
    </div>
  )
}
