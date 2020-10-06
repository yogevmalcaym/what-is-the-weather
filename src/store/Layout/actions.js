import * as types from './types';
import {createAction} from 'store/utils'

export const setInitData = createAction(types.INIT);
export const setCity = createAction(types.SET_CITY);
export const setGlobalError = createAction(types.SET_GLOBAL_ERROR);
export const setFavorites = createAction(types.SET_FAVORITES)

