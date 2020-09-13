import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
    setAllowLocation: ['isAllowLocation'],
});

export const AppTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    isAllowLocation: false,
  });

/* ------------- Reducers ------------- */
export const setAllowLocation = (
    state, { isAllowLocation }
  ) => state.merge({ isAllowLocation })

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_ALLOW_LOCATION]: setAllowLocation,
  });