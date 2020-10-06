import * as types from "./types";
import {updateState} from "store/utils";


const INITIAL_STATE = {
    globalError: null,
    city: {},
    initCompleted: false,
    favorites: []
};

export default (state = INITIAL_STATE, {type, data}) => {
    switch (type) {
        case types.SET_GLOBAL_ERROR:
            return updateState({state, data});
        case types.INIT:
            return updateState({state, data});
        case types.SET_CITY:
            return updateState({state, data});
        case types.SET_FAVORITES:
            return updateState({state, data});
        default:
            return state;
    }
};

