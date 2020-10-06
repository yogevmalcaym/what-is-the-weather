import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunkMiddleware from "redux-thunk";
import layout from "store/Layout/reducer";
import favorites from "store/Favorites/reducer";
import weather from "store/Weather/reducer";

const rootReducer = combineReducers({
    layout,
    favorites,
    weather
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
