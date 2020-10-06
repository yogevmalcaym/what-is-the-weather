import * as types from './types';
import {updateState} from 'store/utils';

const INITIAL_STATE = {
    favoritesData: {}
};

export default (state = INITIAL_STATE, {type, data}) => {
    switch (type) {
        case types.SET_FAVORITES_DATA:
            return updateState({state, data});
        default:
            return state;

    }
};


