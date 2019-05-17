import axios from 'axios';
import parseIncomingData from '../transforms';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export function fetchSchedule() {
  return {
    type: FETCH_DATA
  };
}

export function fetchScheduleSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  };
}

export function fetchScheduleError(error) {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  };
}

export function fetchData() {
  return function action(dispatch) {
    dispatch({ type: FETCH_DATA });

    const request = axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
      headers: []
    });

    return request.then(
      response =>
        dispatch(fetchScheduleSuccess(parseIncomingData(response.data))),
      err => dispatch(fetchScheduleError(err))
    );
  };
}
