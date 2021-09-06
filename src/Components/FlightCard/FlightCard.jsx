import React from 'react';
import s7logo from '../../Assets/S7 Logo.png'

import classes from './FlightCard.module.scss'

function FlightCard() {

  const Route = ({origin, destination, date, duration, stops}) => {

    // const stopsTitle = stops.length === 1 ? `1 ПЕРЕСАДКА` : `${stops.length} ПЕРЕСАДКИ`;

    return (
      <div className={classes.segment}>
        <div className={classes.route}>
          <div className={classes.title}>
            MOW – HKT
          </div>
          <div className={classes.value}>
            10:45 – 08:00
          </div>
        </div>
        <div className={classes.duration}>
          <div className={classes.title}>В ПУТИ</div>
          <div className={classes.value}>{Math.trunc(1275 / 60)}ч {1275 % 60}м</div>
        </div>
        <div className={classes.transfers}>
          <div className={classes.title}>2 пересадки</div>
          <div className={classes.value}>HKG, JNB</div>
        </div>
      </div>
    )
  };

  return (
    <div className={classes.flight_item}>
      <div className={classes.price}>
        <span className={classes.price_amount}>13 400 Р</span>
        <img src={s7logo} alt="s7logo"/>
      </div>
      <Route />
      <Route />
    </div>
  );
}

export default FlightCard;