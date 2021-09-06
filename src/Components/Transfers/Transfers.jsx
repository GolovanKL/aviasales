import React from "react";
import { connect } from "react-redux";

import { setTransfers, setAllTransfers, removeAllTransfers } from "../../redux/store.actions";

import classes from "./Transfers.module.scss"

function Transfers({transfers, setTransfers, setAllTransfers, removeAllTransfers}) {

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
          return;
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
        {transfers.map(elem => {
          return (
            <li key={elem.name}>
              <label className={classes.transfers_item}>
                <input type="checkbox" name={elem.name} checked={elem.checked}
                       onChange={() => onTransfers(elem.name)}/>
                {elem.name}
              </label>
            </li>
          );
        })
        }
      </ul>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setTransfers: name => dispatch(setTransfers(name)),
  setAllTransfers: () => dispatch(setAllTransfers()),
  removeAllTransfers: () => dispatch(removeAllTransfers()),
})

const mapStateToProps = ({transfers}) => ({
  transfers,
});

export default connect(mapStateToProps, mapDispatchToProps)(Transfers);