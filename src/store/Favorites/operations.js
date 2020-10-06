import * as actions from './actions';
import * as helpers from 'store/helpers';
import {setGlobalError, setCity} from "store/Layout/actions";
import * as selectors from './selectors';

export const checkForDataUpdates = ({exists, areExists}) => async (dispatch, getState) => {
    try {
        const keysToFetch = areExists.filter(key => !exists.includes(key));
        const keysToDelete = exists.filter(key => !areExists.includes(key));

        let favoritesData = selectors.getFavoritesData(getState());

        // Delete the data of removed favorites.
        if (keysToDelete.length > 0)
            favoritesData = Object.keys(favoritesData).reduce((acc, key) =>
                    keysToDelete.includes(key) ? acc : {...acc, [key]: favoritesData[key]}
                , {});

        // Fetch data of the new favorites and append it to the favorites data object.
        if (keysToFetch.length > 0) {
            const newFavoritesData = {};

            for (let key of keysToFetch) {
                const {data: [locationData]} = await helpers.fetchCurrentWeather({locationKey: key});
                newFavoritesData[key] = locationData;
            }

            favoritesData = {...favoritesData, ...newFavoritesData};
        }

        // If there was any changes on favorites data object, dispatch the changes
        if (keysToFetch.length > 0 || keysToDelete.length > 0)
            await dispatch(actions.setFavoritesData({favoritesData}));

    } catch (error) {
        await dispatch(setGlobalError({globalError: error}));
    }
};

export const favoriteCityClicked = ({navigateToWeatherPage, city}) => async (dispatch, getState) => {
    await dispatch(setCity({city}));
    navigateToWeatherPage();
}
