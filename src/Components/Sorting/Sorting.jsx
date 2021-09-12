import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { setSorting } from '../../redux/store.actions';

import classes from './Sorting.module.scss';

function Sorting({ sorts, setSorting }) {
  Sorting.propTypes = {
    sorts: PropTypes.arrayOf(PropTypes.string).isRequired,
    setSorting: PropTypes.func.isRequired,
  };

  return (
    <div className={classes.sorting}>
      {sorts.map(({ name, active }) => (
        <button
          key={name}
          type="button"
          name={name}
          className={classNames(classes.button, active && classes.active)}
          onClick={({ target }) => setSorting(target.name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

const mapDispatchToProps = { setSorting };

const mapStateToProps = ({ sorts }) => ({ sorts });

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
