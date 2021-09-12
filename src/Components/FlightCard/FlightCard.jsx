import React from 'react';
import PropTypes from 'prop-types';

import Segment from "../Segment/Segment";

import classes from './FlightCard.module.scss'

export default function FlightCard({carrier, price, segments}) {

  FlightCard.propTypes = {
    carrier: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    segments: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  const carrierLogo = `https://pics.avs.io/99/36/${carrier}.png`;

  return (
    <div className={classes.flight_item}>
      <div className={classes.price}>
        <span className={classes.price_amount}>{price.toLocaleString('ru-RU')} Р</span>
        <img src={carrierLogo} alt="carrierLogo"/>
      </div>
      <Segment segment={segments[0]}/>
      <Segment segment={segments[1]}/>
    </div>
  )
}
