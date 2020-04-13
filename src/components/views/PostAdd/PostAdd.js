import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { isLogged } from '../../../redux/userRedux.js';
import { addPostRequest } from '../../../redux/postsRedux.js';

//import styles from './PostAdd.module.scss';

import { NotFound } from '../NotFound/NotFound';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
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
});

class Component extends React.Component {
  state = {
    post: {
      title: '',
      location: '',
      description: '',
    },
    error: null,
  };
  updateInputValue = ({ target }) => {
    const { post } = this.state;
    const { value, name } = target;

    this.setState({ post: { ...post, [name]: value } });
  };

  submitPost = async (e) => {
    const { post } = this.state;
    const { addPost } = this.props;

    e.preventDefault();

    if (post.title && post.description && post.location) {
      await addPost(post);
      this.setState({
        post: {
          title: '',
          location: '',
          description: '',
        },
        error: null,
      });
    } else this.setState({ isError: true });
  };
  render() {
    const { updateInputValue } = this;
    const { classes, logged, className } = this.props;
    return (
      <div className={clsx(className, classes.root)}>
        {logged ? (
          <Paper elevation={3}>
            <Typography variant="h5" color="textSecondary" component="h2">
              Add new post
            </Typography>
            <form noValidate autoComplete="off" onSubmit={this.submitPost}>
              <div className={classes.form}>
                <TextField
                  required
                  id="post-title"
                  label="Post title"
                  onChange={updateInputValue}
                  name="title"
                />
                <TextField
                  id="post-description"
                  label="Description"
                  multiline
                  rows="4"
                  onChange={updateInputValue}
                  name="description"
                />
                <TextField
                  id="location"
                  label="Location"
                  onChange={updateInputValue}
                  name="location"
                />
                <Button
                  size="medium"
                  color="primary"
                  variant="contained"
                  type="submit"
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
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logged: PropTypes.bool,
  addPost: PropTypes.func,
  classes: PropTypes.object,
};

const mapStateToProps = (state) => ({
  logged: isLogged(state),
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(addPostRequest(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
export const PostAdd = withStyles(styles)(Container);

export {
  //Component as PostAdd,
  //Container as PostAdd,
  Component as PostAddComponent,
};
