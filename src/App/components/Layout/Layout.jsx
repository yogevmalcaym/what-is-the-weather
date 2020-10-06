import classNames from 'classnames';
import {Loader} from '@common-components';
import React, {Suspense, useEffect} from 'react';
import {Router} from '@reach/router';
import styled from 'styled-components';
import * as styles from './styles';
import Weather from './containers/Weather/Weather';
import Favorites from './containers/Favorites/Favorites';
import Header from './components/Header/Header';
import * as selectors from 'store/Layout/selectors';
import * as operations from "store/Layout/operations";
import * as consts from './consts';
import {connect} from 'react-redux';
import ErrorModal from './components/ErrorModal/ErrorModal';
import PageNotFound from './components/PageNotFound/PageNotFound';

const Layout = styled(({className, init, initCompleted, toggleTheme, currentTheme, city, globalError, location = {}, navigate, onAddFavorite, onRemoveFavorite, favorites}) => {

        if (!initCompleted) throw init();

        useEffect(() => {

            if (location.pathname === '/') navigate(consts.WEATHER_PAGE_URL);
        }, [location.pathname]);

        return <div {...{className: classNames(className, 'layout')}}>
            <ErrorModal {...{globalError}}/>
            <Header {...{pathname: location.pathname, toggleTheme, currentTheme}}/>
            <Suspense fallback={<Loader/>}>
                <Router {...{className: 'router'}}>
                    <Weather {...{path: consts.WEATHER_PAGE_URL, city, favorites, onAddFavorite, onRemoveFavorite}}/>
                    <Favorites {...{path: consts.FAVORITES_PAGE_URL, favorites, onRemoveFavorite}}/>
                    <PageNotFound default/>
                </Router>
            </Suspense>
        </div>
    }
)`${styles.Layout}`;

const LayoutWrapper = props => {
    return <Suspense fallback={<Loader/>}>
        <Router>
            <Layout {...{path: './*', ...props}} default/>
        </Router>
    </Suspense>
};

const mapStateToProps = state => ({
    initCompleted: selectors.getInitCompleted(state),
    city: selectors.getCity(state),
    globalError: selectors.getGlobalError(state),
    favorites: selectors.getFavorites(state)
})

const mapDispatchToProps = dispatch => ({
    init: () => dispatch(operations.init()),
    onRemoveFavorite: data => dispatch(operations.removeFavorites(data)),
    onAddFavorite: data => dispatch(operations.addFavorites(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LayoutWrapper);
