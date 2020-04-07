import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { isLogged } from '../../../redux/userRedux.js';

//import styles from './PostAdd.module.scss';

import { NotFound } from '../NotFound/NotFound';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(5),
      width: '50%',
      padding: theme.spacing(2),
    },
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '70%',
    margin: 'auto',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

const Component = ({ className, logged }) => {
  const classes = useStyles();
  return (
    <div className={clsx(className, classes.root)}>
      {logged ? (
        <Paper elevation={3}>
          <Typography variant="h5" color="textSecondary" component="h2">
            Add new post
          </Typography>
          <form noValidate autoComplete="off">
            <div className={classes.form}>
              <TextField
                required
                id="post-title"
                label="Post title"
                defaultValue="Post title"
              />
              <TextField
                id="post-description"
                label="Description"
                multiline
                rows="4"
                defaultValue="Short description"
              />
              <TextField
                id="location"
                label="Location"
                defaultValue="Location"
              />
              <Button
                size="medium"
                color="primary"
                variant="contained"
                component={Link}
                to={`/`}
              >
                Save
              </Button>
            </div>
          </form>
        </Paper>
      ) : (
        <NotFound></NotFound>
      )}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logged: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  logged: isLogged(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
