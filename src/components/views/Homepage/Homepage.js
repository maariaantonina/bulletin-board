import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAll, fetchPublished } from '../../../redux/postsRedux.js';

//import styles from './Homepage.module.scss';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { ItemBox } from '../../features/ItemBox/ItemBox';

class Component extends React.Component {
  componentDidMount() {
    const { fetchPublishedPosts } = this.props;
    fetchPublishedPosts();
  }
  render() {
    const { className, items } = this.props;

    return (
      <Container className={className}>
        <Box px={3} mt={5}>
          <Grid container spacing={1}>
            {items.map((thing) => (
              <Grid key={thing._id} item xs={12} md={3}>
                <ItemBox {...thing}></ItemBox>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  fetchPublishedPosts: PropTypes.func,
  classes: PropTypes.object,
};

const mapStateToProps = (state) => ({
  items: getAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export {
  //Component as Homepage,
  ComponentContainer as Homepage,
  Component as HomepageComponent,
};
