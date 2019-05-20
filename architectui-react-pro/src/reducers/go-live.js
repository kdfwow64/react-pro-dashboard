/* tslint:disable */
import axios from 'axios';
import { FAILURE, REQUEST, SUCCESS } from './action-type.util';
import { API_ROOT } from '../utilities/api-config';

export const ACTION_TYPES = {
  GET_GO_LIVE: 'go-live/GET_GO_LIVE',
  SAVE_GO_LIVE: 'go-live/SAVE_GO_LIVE'
};

const initialState = {
  loading: false,
  saved: false,
  errorMessage: null,
  goLive: {}
};

// Reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_GO_LIVE):
      console.log('go live get success');
      return {
        ...state,
        errorMessage: null,
        loading: true
      };
    case FAILURE(ACTION_TYPES.GET_GO_LIVE):
      console.log('go live get failure');
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.GET_GO_LIVE):
      console.log('go live get success');
      return {
        ...state,
        loading: false,
        goLive: action.payload.data
      };
    case REQUEST(ACTION_TYPES.SAVE_GO_LIVE):
      return {
        ...state,
        errorMessage: null,
        loading: true
      };
    case FAILURE(ACTION_TYPES.SAVE_GO_LIVE):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.SAVE_GO_LIVE):
      return {
        ...state,
        saved: true,
        loading: false /* ,
                goLive: action.payload.data */
      };
    default:
      return state;
  }
};

export const getGoLive = function() {
  return {
    type: ACTION_TYPES.GET_GO_LIVE,
    payload: axios.get(`${API_ROOT}/api/go-live`)
  };
};

export const saveGoLive = function(golive) {
  // sendSlackMessage('Saving Go Live', golive);
  return {
    type: ACTION_TYPES.SAVE_GO_LIVE,
    payload: axios.post(`${API_ROOT}/api/go-live`, golive)
  };
};

export const getGoLiveAndroid = function() {
  return {
    type: ACTION_TYPES.GET_GO_LIVE,
    payload: axios.get(`${API_ROOT}/api/go-live-android`)
  };
};

export const saveGoLiveAndroid = function(golive) {
  // sendSlackMessage('Saving Go Live Android', golive);
  return {
    type: ACTION_TYPES.SAVE_GO_LIVE,
    payload: axios.post(`${API_ROOT}/api/go-live-android`, golive)
  };
};
