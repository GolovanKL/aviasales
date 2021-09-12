import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { setTransfers, setAllTransfers, removeAllTransfers } from "../../redux/store.actions";

import classes from "./Transfers.module.scss"

function Transfers({transfers, setTransfers, setAllTransfers, removeAllTransfers}) {

  Transfers.propTypes = {
    transfers: PropTypes.arrayOf(PropTypes.string).isRequired,
    setTransfers: PropTypes.func.isRequired,
    setAllTransfers: PropTypes.func.isRequired,
    removeAllTransfers: PropTypes.func.isRequired
  }

  if (!transfers[0].checked) {
    if (transfers.slice(1).filter(elem => !elem.checked).length === 0) {
      setTransfers('Все');
    }
  }

  const onTransfers = name => {
    if (transfers[0].checked) {
      switch (name) {
        case 'Все':
          removeAllTransfers();
          return;
        default:
          setTransfers(name);
          setTransfers('Все');
      }
    } else {
      switch (name) {
        case 'Все':
          setAllTransfers();
          return;
        default:
          setTransfers(name);
      }
    }
  }

  return (
    <div className={classes.filters}>
      <div>
        <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      </div>
      <ul className={classes.transfers}>
        {transfers.map(({name, checked}) => (
          <li key={name}>
            <label className={classes.transfers_item}>
              <input type="checkbox"
                     name={name}
                     checked={checked}
                     onChange={() => onTransfers(name)}
              />
              {name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapDispatchToProps = {
  setTransfers,
  setAllTransfers,
  removeAllTransfers,
}

const mapStateToProps = ({transfers}) => ({transfers});

export default connect(mapStateToProps, mapDispatchToProps)(Transfers);