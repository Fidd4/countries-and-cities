import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export const countries = (state=initialState.countries, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const countryActive = (state=initialState.countryActive, action) => {
  switch (action.type) {
    case types.SELECT_COUNTRY:
      return action.country_id;
    default:
      return state;
  }
}