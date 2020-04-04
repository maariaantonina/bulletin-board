import React from 'react';
import PropTypes from 'prop-types';
//import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

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
    maxWidth: 290,
    flexGrow: 1,
    minHeight: 340,
  },
  media: {
    height: 140,
  },
  description: {
    minHeight: 80,
  },
});

const Component = ({ title, photo, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={photo} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions mb={0}>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  photo: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ItemBox,
  // Container as ItemBox,
  Component as ItemBoxComponent,
};
