import * as types from './types';
import {updateState} from 'store/utils';

const INITIAL_STATE = {
    initCompleted: false,
    weatherData: {},
    formError: null
};

export default (state = INITIAL_STATE, {type, data}) => {
    switch (type) {
        case types.INIT:
            return updateState({state, data});
        case types.SET_WEATHER_DATA:
            return updateState({state, data});
        case types.SET_FORM_ERROR:
            return updateState({state, data});
            case types.SET_INIT_COMPLETED:
            return updateState({state, data});
        default:
            return state;

    }
};
