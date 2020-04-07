import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getById } from '../../../redux/postsRedux.js';
import { isLogged } from '../../../redux/userRedux.js';

//import styles from './PostEdit.module.scss';

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

const Component = ({
  className,
  title,
  description,
  location,
  _id,
  logged,
}) => {
  const classes = useStyles();
  return (
    <div className={clsx(className, classes.root)}>
      {logged ? (
        <Paper elevation={3}>
          <Typography variant="h5" color="textSecondary" component="h2">
            Edit your post
          </Typography>
          <form noValidate autoComplete="off">
            <div className={classes.form}>
              <TextField
                required
                id="post-title"
                label="Post title"
                defaultValue={title}
              />
              <TextField
                id="post-description"
                label="Description"
                multiline
                rows="4"
                defaultValue={description}
              />
              <TextField
                id="location"
                label="Location"
                defaultValue={location}
              />
              <Button
                size="medium"
                color="primary"
                variant="contained"
                component={Link}
                to={`/post/${_id}`}
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
  title: PropTypes.string,
  _id: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  location: PropTypes.string,
  logged: PropTypes.bool,
};

const mapStateToProps = (state, props) => {
  const post = getById(state, props.match.params.id);
  return {
    ...post,
    logged: isLogged(state),
  };
};

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ComponentContainer = connect(mapStateToProps)(Component);

export {
  //Component as PostEdit,
  ComponentContainer as PostEdit,
  Component as PostEditComponent,
};
