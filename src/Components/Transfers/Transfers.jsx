import React, { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';

import { setTransfers, setAllTransfers, removeAllTransfers } from '../../redux/mainSlice';

import classes from './Transfers.module.scss';

function Transfers() {
  const dispatch = useDispatch();
  const { transfers } = useSelector(state => state.main);

  useEffect(() => {
    if (!transfers[0].checked) {
      if (transfers.slice(1).filter((elem) => !elem.checked).length === 0) {
        dispatch(setTransfers('Все'));
      }
    }
  }, [ transfers, dispatch ]);

  const onTransfers = (name) => {
    if (transfers[0].checked) {
      switch (name) {
        case 'Все':
          dispatch(removeAllTransfers());
          return;
        default:
          dispatch(setTransfers(name));
          dispatch(setTransfers('Все'));
      }
    } else {
      switch (name) {
        case 'Все':
          dispatch(setAllTransfers());
          return;
        default:
          dispatch(setTransfers(name));
      }
    }
  };

  return (
    <div className={classes.filters}>
      <div>
        <span>КОЛИЧЕСТВО ПЕРЕСАДОК:</span>
      </div>
      <ul className={classes.transfers}>
        {transfers.map(({ name, checked }) => (
          <li key={name} className={classes.transfers_item}>
            <label >
              <input type="checkbox" name={name} checked={checked} onChange={() => onTransfers(name)} />
              {name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transfers;

