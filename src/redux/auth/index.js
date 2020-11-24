const USER_REGISTRATION = 'USER_REGISTRATION';
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';
const USER_AUTHENTICATION = 'USER_AUTHENTICATION';
const LOADING = 'LOGIN_FAIL';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REGISTRATION:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        isAuthenticated: true,
        token: payload.token,
        user: payload.user,
      };
    case USER_LOGIN:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        isAuthenticated: true,
        token: payload.token,
        user: payload.user,
      };
    case USER_LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };
    case USER_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};

export default reducer;
