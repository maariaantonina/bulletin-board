import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//import clsx from 'clsx';

import { connect } from 'react-redux';
import { isLogged } from '../../../redux/userRedux.js';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    minHeight: 340,
  },
  media: {
    height: 140,
  },
  description: {
    minHeight: 165,
  },
});

const Component = ({ title, photo, description, _id, logged }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/post/${_id}`} underline="none">
        <CardMedia className={classes.media} image={photo} title={title} />
        <CardContent className={classes.description}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions mb={0}>
        {logged && (
          <div>
            <Button
              size="small"
              color="primary"
              component={Link}
              to={`/post/${_id}/edit`}
            >
              Edit
            </Button>
            <Button size="small" color="primary">
              Delete
            </Button>
          </div>
        )}
      </CardActions>
    </Card>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  photo: PropTypes.string,
  description: PropTypes.string,
  _id: PropTypes.string,
  logged: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  logged: isLogged(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ComponentContainer = connect(mapStateToProps)(Component);

export {
  //Component as ItemBox,
  ComponentContainer as ItemBox,
  Component as ItemBoxComponent,
};
