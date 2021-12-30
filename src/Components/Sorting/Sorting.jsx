import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { setSorting } from '../../redux/mainSlice';

import classes from './Sorting.module.scss';

function Sorting() {
  const dispatch = useDispatch();
  const { sorts } = useSelector(store => store.main);

  return (
    <div className={classes.sorting}>
      {sorts.map(({ name, active }) => (
        <button
          key={name}
          type="button"
          name={name}
          className={classNames(classes.button, active && classes.active)}
          onClick={({ target }) => dispatch(setSorting(target.name))}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default Sorting;