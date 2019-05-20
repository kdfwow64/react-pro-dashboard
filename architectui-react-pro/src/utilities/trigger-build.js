/* tslint:disable */
import axios from 'axios';
import { API_ROOT } from './api-config';
import { FAILURE, REQUEST, SUCCESS } from '../reducers/action-type.util';

export const ACTION_TYPES = {
  TRIGGER_BUILD_iOS: 'trigger-build/TRIGGER_BUILD_iOS',
  TRIGGER_BUILD_ANDROID: 'trigger-build/TRIGGER_BUILD_ANDROID'
};

const initialState = {
  loadingiOS: false,
  loadingAndroid: false,
  saved: false,
  errorMessage: null,
  triggerBuildResponseiOS: {},
  triggerBuildResponseAndroid: {}
};

// Reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.TRIGGER_BUILD_iOS):
      return {
        ...state,
        errorMessage: null,
        loadingiOS: true
      };
    case FAILURE(ACTION_TYPES.TRIGGER_BUILD_iOS):
      return {
        ...state,
        loadingiOS: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.TRIGGER_BUILD_iOS):
      return {
        ...state,
        saved: true,
        loadingiOS: false,
        triggerBuildResponseiOS: action.payload.data
      };

    case REQUEST(ACTION_TYPES.TRIGGER_BUILD_ANDROID):
      return {
        ...state,
        errorMessage: null,
        loadingAndroid: true
      };
    case FAILURE(ACTION_TYPES.TRIGGER_BUILD_ANDROID):
      return {
        ...state,
        loadingAndroid: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.TRIGGER_BUILD_ANDROID):
      return {
        ...state,
        saved: true,
        loadingAndroid: false,
        triggerBuildResponseAndroid: action.payload.data
      };
    default:
      return state;
  }
};

export const triggerBuildiOS = () => ({
  type: ACTION_TYPES.TRIGGER_BUILD_iOS,
  payload: axios.post(`${API_ROOT}/api/v1/app-center/trigger-build-ios`)
});

export const triggerBuildAndroid = () => ({
  type: ACTION_TYPES.TRIGGER_BUILD_ANDROID,
  payload: axios.post(`${API_ROOT}/api/v2/app-center/trigger-build-android`)
});
