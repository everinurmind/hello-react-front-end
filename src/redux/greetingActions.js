import axios from 'axios';

export const SET_GREETING = 'SET_GREETING';
export const SET_ERROR = 'SET_ERROR';

export const setGreeting = (greeting) => ({
  type: SET_GREETING,
  payload: greeting,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const fetchGreeting = () => (dispatch) => {
  axios.get('http://localhost:3000')
    .then((response) => {
      dispatch(setGreeting(response.data.message));
    })
    .catch((error) => {
      dispatch(setError(error.message));
    });
};
