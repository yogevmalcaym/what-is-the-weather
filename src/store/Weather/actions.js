import * as types from './types';
import {createAction} from "store/utils";

export const setInitData = createAction(types.INIT);
export const setWeatherData = createAction(types.SET_WEATHER_DATA);
export const setFormError = createAction(types.SET_FORM_ERROR)
