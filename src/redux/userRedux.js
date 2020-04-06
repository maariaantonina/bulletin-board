/* selectors */
export const isLogged = ({ user }) => user.logged;

/* action name creator */
const reducerName = 'posts';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const LOG_TOGGLE = createActionName('LOG_TOGGLE');
const LOG_IN = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });

export const logIn = (payload) => ({ payload, type: LOG_IN });
export const logOut = (payload) => ({ payload, type: LOG_OUT });
export const logToggle = (payload) => ({ payload, type: LOG_TOGGLE });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case LOG_IN: {
      return {
        ...statePart,
        logged: true,
      };
    }
    case LOG_OUT: {
      return {
        ...statePart,
        logged: false,
      };
    }
    case LOG_TOGGLE: {
      return {
        ...statePart,
        logged: !statePart.logged,
      };
    }
    default:
      return statePart;
  }
};
