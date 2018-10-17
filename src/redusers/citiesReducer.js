import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export const city = (state={}, action) => {
  switch (action.type) {
    case types.ADD_CITY:
      return {
        id: action.id,
        country_id: action.country_id,
        title: action.title,
        desc: action.desc
      }
    case types.EDIT_CITY:
      return (state.id !== action.id) ?
        state :
        {
          ...state,
          title: action.title,
          desc: action.desc
        }
      default:
        return state;
  }
}

export const cities = (state=initialState.cities, action) => {
  switch (action.type) {
    case types.ADD_CITY:
      return [
        ...state,
        city({}, action)
      ];
    case types.REMOVE_CITY:
      return state.filter(city =>
        city.id !== action.id
      )
    case types.EDIT_CITY:
        return state.map(
          c => city(c, action)
        )
    default:
      return state;
  }
}