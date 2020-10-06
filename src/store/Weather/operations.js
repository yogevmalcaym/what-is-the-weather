import * as actions from './actions';
import * as helpers from 'store/helpers';
import {setGlobalError, setCity} from 'store/Layout/actions';
import * as consts from './consts';

export const init = ({city}) => async (dispatch, getState) => {
    try {
        if(city) {
            const {data: [current]} = await helpers.fetchCurrentWeather({locationKey: city.key});
            const {data: forecast} = await helpers.fetch5DaysForecast({locationKey: city.key});

            await dispatch(actions.setInitData({initCompleted: true, weatherData: {current, forecast}}));
        }
    } catch (error) {
        await dispatch(setGlobalError({globalError: error, initCompleted: true}));
        await dispatch(actions.setInitCompleted({initCompleted: true}));

    }
};

export const findWeather = ({name}) => async (dispatch, getState) => {
    try {
        const {data: completionsResponse} = await helpers.fetchAutoCompletion({text: name});

        // Handles an occasion when there is no match for the searched text.
        if (completionsResponse.length === 0)
            return await dispatch(actions.setFormError({formError: consts.NO_CITY_ERROR}));

        const city = {
            name: completionsResponse[0]["LocalizedName"],
            key: completionsResponse[0]["Key"]
        };

        const {data: [current]} = await helpers.fetchCurrentWeather({locationKey: city.key});
        const {data: forecast} = await helpers.fetch5DaysForecast({locationKey: city.key});

        await dispatch(setCity({city}));
        await dispatch(actions.setWeatherData({weatherData: {current, forecast}}));

    } catch (error) {
        await dispatch(setGlobalError({globalError: error}));
    }

};

export const clearFormError = () => async (dispatch, getState) => {
    await dispatch(actions.setFormError({formError: null}));
}
