import React from 'react';
import { connect } from "react-redux";
import classNames from "classnames";

import { setSorting } from "../../redux/store.actions";

import classes from './Sorting.module.scss'

function Sorting({sorts, setSorting}) {

  return (
    <div className={classes.sorting}>
      {sorts.map(({name, active}) =>
        <button
          key={name}
          type="button"
          name={name}
          className={classNames(classes.button, (active && classes.active))}
          onClick={({target: {name}}) => setSorting(name)}
        >{name}
        </button>
      )}
    </div>
  );
}

const mapDispatchToProps = {setSorting};

const mapStateToProps = ({sorts}) => ({sorts});

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);