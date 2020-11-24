const SET_ERROR = 'CLEAR_ERROR';
const CLEAR_ERROR = 'CLEAR_ERROR';

const initialState = {
  msg: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ERROR:
      return {
        msg: payload,
      };
    case CLEAR_ERROR:
      return {
        msg: null,
      };
    default:
      return state;
  }
};

// return errors
export const setError = (message) => ({
  type: SET_ERROR,
  payload: message,
});

// clear errors
export const clearError = () => ({
  type: CLEAR_ERROR,
  payload: null,
});

export default reducer;
