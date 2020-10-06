import {css} from 'styled-components'
import {getColor} from 'styles/helper';
import {transparentize} from 'polished';

export const Weather = css`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    
    > h2 {
        border-bottom: 2px solid ${getColor('primary')};
        padding: 0px 5px;
        margin-bottom: 30px;
    }
    
    > .current-weather-wrapper {
        border-radius: 10px;
        background-color: ${getColor('background', 'dark')};
        margin: 20px 10px;
        padding: 10px 0px;
        width: 100%;
        max-width: 500px;
        min-width: 250px;
        border-top: 2px solid ${(props) => transparentize(0.5, getColor('primary')(props))};
        border-bottom: 2px solid ${(props) => transparentize(0.5, getColor('primary')(props))};
    }    
    
`;
