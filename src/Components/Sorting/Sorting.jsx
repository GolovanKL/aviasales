import React from 'react';

import classNames from "classnames";

import classes from './Sorting.module.scss'


function Sorting() {

  const inactiveButton = classNames(classes.button);
  const activeButton = classNames(classes.button, classes.active)

  return (
    <div className={classes.sorting}>
        <button type="button" className={activeButton}>САМЫЙ ДЕШЕВЫЙ</button>
        <button type="button" className={inactiveButton}>САМЫЙ БЫСТРЫЙ</button>
        <button type="button" className={inactiveButton}>ОПТИМАЛЬНЫЙ</button>
    </div>
  );
}

export default Sorting;