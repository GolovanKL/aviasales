import React from 'react';
import PropTypes from 'prop-types';

import { flightDuration, arrival, departure } from '../../utils/timeUtils';
import classes from './Segment.module.scss';

const Segment = ({ segment: { origin, destination, date, duration, stops } }) => {
  Segment.propTypes = {
    segment: PropTypes.shape({
      origin: PropTypes.string,
      destination: PropTypes.string,
      date: PropTypes.string,
      duration: PropTypes.number,
      stops: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  };

  const stopsTitles = {
    0: 'БЕЗ ПЕРЕСАДОК',
    1: '1 ПЕРЕСАДКА',
    2: '2 ПЕРЕСАДКИ',
    3: '3 ПЕРЕСАДКИ',
  };

  const stopNames = stops.map((stop) => ` ${stop}`).toString();

  return (
    <div className={classes.segment}>
      <div className={classes.route}>
        <div className={classes.title}>
          {origin} – {destination}
        </div>
        <div className={classes.value}>
          {departure(date)} – {arrival(date, duration)}
        </div>
      </div>
      <div className={classes.duration}>
        <div className={classes.title}>В ПУТИ</div>
        <div className={classes.value}>{flightDuration(duration)}</div>
      </div>
      <div className={classes.transfers}>
        <div className={classes.title}>{stopsTitles[stops.length]}</div>
        <div className={classes.value}>{stopNames}</div>
      </div>
    </div>
  );
};

export default Segment;
