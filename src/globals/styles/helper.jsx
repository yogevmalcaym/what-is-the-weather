import React from 'react';
import {css} from 'styled-components';
import MediaQuery from 'react-responsive';

const mobileMaxWidth = 600;

export const getColor = (key, tone = 'main') => ({theme}) => theme.colors[key][tone];

export const isMobile = style => () => css`
    @media (max-width: ${mobileMaxWidth}px) {
        ${style};
    }
`;

export const MobileMediaQuery = ({children}) => <MediaQuery {...{maxDeviceWidth: mobileMaxWidth}}>{children}</MediaQuery>;

export const PCMediaQuery = ({children}) => <MediaQuery {...{minDeviceWidth: mobileMaxWidth}}>{children}</MediaQuery>;
