import {css} from 'styled-components'
import {getColor, isMobile} from 'styles/helper';

export const Forecast = css`
    display: flex;
    width: 100%;
    min-width: 240px;
    flex-direction: column;
    
    ${isMobile(css`
        flex-direction: column;
        padding: 0px 10px;
    `)};
    
    > .forecast-heading {
        margin: 0px auto 17px auto;
        padding: 0px 5px;
        width: fit-content;
        border-bottom: 2px solid ${getColor('primary')};
    }
    
    > .summary-text {
        margin: 0px auto 15px auto;
        width: fit-content;
        border-bottom: 1px solid ${getColor('primary')};
        padding: 0px 10px;
        
        > span {
            font-size: 15px;
        }
    }
    
    > .daily-forecasts {
        display: flex;
        
        ${isMobile(css`
            flex-direction: column;
        `)};
    }
`;
