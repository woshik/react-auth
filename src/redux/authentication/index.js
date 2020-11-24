import axiosInstance from '../../helper/axios';

const LOGIN_REQUEST_SENT = 'LOGIN_REQUEST_SENT';
const LOGIN_REQUEST_COMPLETE = 'LOGIN_REQUEST_COMPLETE';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';

const userData = localStorage.getItem('user') ?? {};

const initialState = {
  token: userData.token ?? null,
  isAuthenticated: false,
  user: userData.token ?? null,
  loader: false,
};

const authenticationReducer = (state = initialState, {
  type,
  payload,
}) => {
  switch (type) {
    case LOGIN_REQUEST_SENT:
      return {
        ...state,
        loader: true,
      };
    case LOGIN_REQUEST_COMPLETE:
      return {
        ...state,
        loader: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('user', payload);
      return {
        ...state,
        isAuthenticated: true,
        token: payload.token,
        user: payload.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    case LOGOUT:
      localStorage.removeItem('user');
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

export const userLogin = (data) => {
  function requestSent() {
    return {
      type: LOGIN_REQUEST_SENT,
    };
  }

  function requestComplete() {
    return {
      type: LOGIN_REQUEST_COMPLETE,
    };
  }

  function success({
    user,
    token,
  }) {
    return {
      type: LOGIN_SUCCESS,
      user,
      token,
    };
  }

  function failure(error) {
    return {
      type: LOGIN_FAILURE,
      error,
    };
  }

  return (dispatch) => {
    dispatch(requestSent());
    axiosInstance.post('login', data).then((response) => {
      dispatch(success(response));
    }).catch((error) => {
      dispatch(failure(error));
    }).then(() => {
      dispatch(requestComplete());
    });
  };
};

export const logout = () => ({
  type: LOGOUT,
});

export default authenticationReducer;
