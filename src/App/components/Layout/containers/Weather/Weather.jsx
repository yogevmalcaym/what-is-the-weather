import React, {useCallback, useMemo, memo} from 'react';
import SearchForm from "./components/SearchForm/SearchForm";
import classNames from 'classnames';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as styles from './styles';
import * as selectors from 'store/Weather/selectors';
import * as operations from 'store/Weather/operations';
import * as consts from './consts';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from './components/Forecast/Forecast';

const Weather = styled(memo(({className, initCompleted, init, city, findWeather, weatherData, onAddFavorite, onRemoveFavorite, favorites, formError, clearFormError}) => {

    if (!initCompleted) throw init();

    const isFavorite = useMemo(() =>
            favorites.some(({key}) => key === city.key)
        , [favorites, city.key]);

    const onFavoriteIconClicked = useCallback(({isFavorite}) =>
            isFavorite ?
                onRemoveFavorite({key: city.key}) :
                onAddFavorite(city)
        , [city.key]);

    const onFormSubmit = useCallback(({name}) => findWeather({name}), []);

    return <div {...{className: classNames(className, 'weather')}}>
        <h2>{consts.HEADING}</h2>
        <SearchForm {...{textValue: city.name, onSubmit: onFormSubmit, error: formError, clearError: clearFormError}}/>
        <div className='current-weather-wrapper'>
            <h3>{consts.CURRENT_WEATHER}</h3>
            <CurrentWeather {...{
                city,
                isFavorite,
                data: weatherData.current,
                onFavoriteIconClicked
            }}/>
        </div>
        <Forecast {...{data: weatherData.forecast}}/>
    </div>;

}))`${styles.Weather}`;

const mapStateToProps = state => ({
    initCompleted: selectors.getInitCompleted(state),
    weatherData: selectors.getWeatherData(state),
    formError: selectors.getFormError(state),
});

const mapDispatchToProps = (dispatch, {city}) => ({
    init: () => dispatch(operations.init({city})),
    findWeather: data => dispatch(operations.findWeather(data)),
    clearFormError: () => dispatch(operations.clearFormError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
