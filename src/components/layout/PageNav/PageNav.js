import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PageNav.module.scss';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
  },
}));

const Component = ({ className }) => {
  const classes = useStyles();
  return (
    <nav className={clsx(className, styles.root)}>
      <Button
        component={NavLink}
        to="/post/add"
        activeClassName="active"
        variant="text"
        className={classes.root}
      >
        New post
      </Button>
      <Button
        component={NavLink}
        to="#"
        activeClassName="active"
        variant="text"
        className={classes.root}
      >
        Your posts
      </Button>
      <Button
        component={NavLink}
        to="#"
        activeClassName="active"
        variant="text"
        className={classes.root}
      >
        Log out
      </Button>
    </nav>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PageNav,
  // Container as PageNav,
  Component as PageNavComponent,
};
