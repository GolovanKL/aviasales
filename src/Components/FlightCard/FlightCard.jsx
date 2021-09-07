import React from 'react';

import classes from './FlightCard.module.scss'

export default function FlightCard({carrier, price, segments}) {

  const Route = ({segment: {origin, destination, date, duration, stops}}) => {

    const stopsTitle = stops.length === 1 ? `1 ПЕРЕСАДКА` : `${stops.length} ПЕРЕСАДКИ`;
    const flightDuration = `${Math.trunc(duration / 60)}ч ${duration % 60}м`

    return (
      <div className={classes.segment}>
        <div className={classes.route}>
          <div className={classes.title}>
            {origin} – {destination}
          </div>
          <div className={classes.value}>
            10:45 – 08:00
          </div>
        </div>
        <div className={classes.duration}>
          <div className={classes.title}>В ПУТИ</div>
          <div className={classes.value}>{flightDuration}</div>
        </div>
        <div className={classes.transfers}>
          <div className={classes.title}>{stopsTitle}</div>
          <div className={classes.value}>{stops.map(stop => `${stop}, `)}</div>
        </div>
      </div>
    )
  };

  const carrierLogo = `https://pics.avs.io/99/36/${carrier}.png`;

  return (
    <div className={classes.flight_item}>
      <div className={classes.price}>
        <span className={classes.price_amount}>{price} Р</span>
        <img src={carrierLogo} alt="carrierLogo"/>
      </div>
      <Route segment={segments[0]}/>
      <Route segment={segments[1]}/>
    </div>
  )
}
