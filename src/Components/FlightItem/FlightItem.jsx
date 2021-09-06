import React from 'react';
import s7logo from '../../Assets/S7 Logo.png'

import classes from './FlightItem.module.scss'

function FlightItem() {
  return (
    <div className={classes.flight_item}>
      <div className={classes.price}>
        <span className={classes.price_amount}>13 400 Р</span>
        <img src={s7logo} alt="s7logo"/>
      </div>
      <div className="route">

      </div>
    </div>
  );
}

export default FlightItem;