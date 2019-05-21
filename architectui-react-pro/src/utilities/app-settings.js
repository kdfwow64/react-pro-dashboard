import axios from 'axios';
import { submit } from 'redux-form';
import { FAILURE, REQUEST, SUCCESS } from '../reducers/action-type.util';
import { API_ROOT } from './api-config';

export const ACTION_TYPES = {
  GET_APP_SETTINGS: 'app-settings/GET_APP_SETTINGS',
  SAVE_APP_SETTINGS: 'app-settings/SAVE_APP_SETTINGS'
};

const initialState = {
  loading: false,
  saved: false,
  errorMessage: null,
  appSettings: {}
};

export const onChangeSubmit = handleSubmit => {
  let timerIdle;
  return function(e) {
    clearTimeout(timerIdle);
    timerIdle = setTimeout(() => {
      handleSubmit();
    }, 1000);
  };
};

// Reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_APP_SETTINGS):
      return {
        ...state,
        errorMessage: null,
        loading: true
      };
    case FAILURE(ACTION_TYPES.GET_APP_SETTINGS):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.GET_APP_SETTINGS):
      return {
        ...state,
        loading: false,
        appSettings: action.payload
      };
    case REQUEST(ACTION_TYPES.SAVE_APP_SETTINGS):
      return {
        ...state,
        errorMessage: null,
        loading: true
      };
    case FAILURE(ACTION_TYPES.SAVE_APP_SETTINGS):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.SAVE_APP_SETTINGS):
      return {
        ...state,
        saved: true,
        loading: false /* ,
                appSettings: action.payload.data */
      };
    default:
      return state;
  }
};

export const getAppSettings = () => {
  return dispatch =>
    axios.get(`${API_ROOT}/api/app-settings`).then(
      res => {
        dispatch({
          type: SUCCESS(ACTION_TYPES.GET_APP_SETTINGS),
          payload: res.data
        });
      },
      err => {
        dispatch({
          type: FAILURE(ACTION_TYPES.GET_APP_SETTINGS),
          payload: err
        });
      }
    );
};

export const saveAppSettings = function(appSettings) {
  // sendSlackMessage('Saving App Settings', appSettings);
  return {
    type: ACTION_TYPES.SAVE_APP_SETTINGS,
    payload: axios.post(`${API_ROOT}/api/app-settings`, appSettings)
  };
};

export const saveForm = function(formName) {
  // sendSlackMessage(formName + ' submitted');
  return dispatch => {
    dispatch(submit(formName));
  };
};
