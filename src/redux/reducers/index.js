import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions';

const meta = {
  isPending: false,
  isFilled: false,
  isRejected: false,
  errorMessage: null
};

const INITIAL_STATE = {
  meta,
  scheduleData: []
};

function schedule(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...INITIAL_STATE,
        meta: {
          ...meta,
          isPending: true
        }
      };
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        scheduleData: action.payload,
        meta: {
          ...meta,
          isFilled: true
        }
      };
    }
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        scheduleData: [],
        meta: {
          ...meta,
          isRejected: true,
          errorMessage: action.payload
        }
      };
    default:
      return state;
  }
}

export default schedule;
