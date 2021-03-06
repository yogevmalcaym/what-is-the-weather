import * as actions from './actions';
import * as helpers from 'store/helpers';
import {setGlobalError} from "store/Layout/actions";
import * as utils from "utils/index";
import * as selectors from './selectors';

const DEFAULT_CITY = {name: "Tel Aviv", key: '215854'};

const getCurrentCity = () =>
    new Promise((resolve, reject) => {
        if (!navigator.geolocation) resolve(null);

        const successCallback = async ({coords}) => {
            try {
                const coordsText = `${coords.latitude},${coords.longitude}`;
                const {data: locationData} = await helpers.fetchLocationByCoords({coords: coordsText});

                resolve({key: locationData.Key, name: locationData.LocalizedName});

            } catch (error) {
                reject(error)
            }
        }

        navigator.geolocation.getCurrentPosition(successCallback, (err) => resolve(null));
    })

export const init = () => async (dispatch, getState) => {
    try {
        const currentCity = await getCurrentCity();
        const city = currentCity || DEFAULT_CITY;
        const favorites = utils.getFavorites();

        await dispatch(actions.setInitData({initCompleted: true, city, favorites}));
    } catch (error) {

        await dispatch(setGlobalError({globalError: error, initCompleted: true}));
    }
};


export const addFavorites = (city) => async (dispatch, getState) => {
    const prevFavorites = selectors.getFavorites(getState());
    const favorites = [...prevFavorites, city];

    utils.saveFavorites(favorites);

    await dispatch(actions.setFavorites({favorites}));

}

export const removeFavorites = ({key: _key}) => async (dispatch, getState) => {
    const prevFavorites = selectors.getFavorites(getState())
    const favorites = prevFavorites.filter(({key}) => key !== _key);

    utils.saveFavorites(favorites);

    await dispatch(actions.setFavorites({favorites}));
}
