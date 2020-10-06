import React, {useEffect, useCallback, memo} from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as styles from './styles';
import * as selectors from 'store/Favorites/selectors';
import * as operations from 'store/Favorites/operations';
import * as consts from './consts';
import NoFavorites from "./components/NoFavorites/NoFavorites";
import {WEATHER_PAGE_URL} from '../../consts';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';


const Favorites = styled(memo(({className, onRemoveFavorite, favorites, favoritesData, checkForDataUpdates, navigate, favoriteCityClicked}) => {

    useEffect(() => {
        checkForDataUpdates({exists: Object.keys(favoritesData), areExists: favorites.map(({key}) => key)});
    }, [favorites, favoritesData]);

    const navigateToWeatherPage = useCallback(() => navigate(WEATHER_PAGE_URL), [navigate]);

    const onCardClickedHandler = useCallback(city =>
            favoriteCityClicked({navigateToWeatherPage, city})
        , [navigateToWeatherPage]);

    return <div {...{className: classNames(className, 'favorites')}}>
        <h2>{consts.HEADING}</h2>
        <div className='content'>
            {favorites.length === 0 ?
                <NoFavorites/> : favorites.map(city =>
                    <CurrentWeather {...{
                        key: city.key,
                        data: favoritesData[city.key],
                        className: "favorite-card",
                        city,
                        onClick: onCardClickedHandler,
                        onFavoriteIconClicked: onRemoveFavorite,
                        isFavorite: true
                    }}/>
                )}
        </div>
    </div>;
}))`${styles.Favorites}`;

const mapStateToProps = state => ({
    favoritesData: selectors.getFavoritesData(state)
});

const mapDispatchToProps = dispatch => ({
    checkForDataUpdates: args => dispatch(operations.checkForDataUpdates(args)),
    favoriteCityClicked: args => dispatch(operations.favoriteCityClicked(args))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
