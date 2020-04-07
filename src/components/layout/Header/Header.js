import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//import clsx from 'clsx';

import { connect } from 'react-redux';
import { isLogged, logToggle } from '../../../redux/userRedux.js';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

//import styles from './Header.module.scss';

import { ReactComponent as Logo } from '../../../assets/logo/logo--white.svg';
import { PageNav } from '../PageNav/PageNav';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  radio: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  login: {
    color: 'white',
  },
}));

const Component = ({ className, logged, logToggle }) => {
  const classes = useStyles();
  //if auth==true you need to login
  const [auth, setAuth] = React.useState(!logged);

  const handleChange = (event) => {
    setAuth(event.target.checked);
    logToggle();
  };

  const logout = () => {
    setAuth(true);
    logToggle();
  };

  return (
    <div className={classes.root}>
      <Container>
        <FormGroup>
          <FormControlLabel
            className={classes.radio}
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={auth ? 'Logged out' : 'Logged in'}
          />
        </FormGroup>
      </Container>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Link to={`${process.env.PUBLIC_URL}/`}>
              <Logo />
            </Link>
            <div className={classes.flexGrow} />

            <Hidden lgUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden mdDown>
              {auth && (
                <div>
                  <Button
                    variant="text"
                    startIcon={<AccountCircle />}
                    className={classes.login}
                  >
                    Log in
                  </Button>
                </div>
              )}
              {!auth && <PageNav logout={logout} />}
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  logged: PropTypes.bool,
  logToggle: PropTypes.func,
};

const mapStateToProps = (state) => ({
  logged: isLogged(state),
});

const mapDispatchToProps = (dispatch) => ({
  logToggle: () => dispatch(logToggle()),
});

const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export {
  //Component as Header,
  ComponentContainer as Header,
  Component as HeaderComponent,
};
