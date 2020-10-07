import React, {useCallback, useState} from "react";
import {ThemeProvider} from 'styled-components';
import theme from 'styles/theme';
import Layout from './components/Layout/Layout';
import * as styles from './styles';
import {LocationProvider, createHistory} from "@reach/router";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const history = createHistory(window);

const themeTypes = ["light", "dark"];

export default () => {

    const [currentTheme, setCurrentTheme] = useState(themeTypes[0]);

    const toggleTheme = useCallback(() => {
        setCurrentTheme(currentTheme === themeTypes[0] ? themeTypes[1] : themeTypes[0])
    }, [currentTheme, setCurrentTheme]);

    return <>
        <ErrorBoundary>
            <ThemeProvider {...{theme: theme[currentTheme]}}>
                <LocationProvider {...{history}}>
                    <styles.GlobalStyle/>
                    <Layout {...{toggleTheme, currentTheme}}/>
                </LocationProvider>
            </ThemeProvider>
        </ErrorBoundary>
    </>;
}

