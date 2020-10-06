import {css} from 'styled-components'
import {getColor, isMobile} from 'styles/helper';

export const Day = css`
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 10px 5px;
    flex: 1 0 123px;
    box-shadow: 0px 0px 3px 1px ${getColor('primary')};
    border-radius: 5px;
    margin: 0px 10px;
    background-color: ${getColor('background', 'dark')};
    
    ${isMobile(css`
        width: 100%;
        margin: 10px 0px;

    `)};
    
    > div {
    
        flex: 1 1;
        align-items: center;
        
        > * {
            flex: 1 0 0;
        }
    }
    
    > .header {
        
        margin: 0px auto 8px auto  ;
        
        > span {
            border-bottom: 1px solid ${getColor('primary')};
            padding: 5px 10px;
        }
        
    }
     
    > .day {
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid ${getColor('background', 'light')};
        padding-bottom: 10px;
        margin-bottom: 10px;
    };
    
    > .night {
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid ${getColor('background', 'light')};
        padding-bottom: 10px;
        margin-bottom: 10px;
    }; 
    
    > .range {
        display: flex;
        justify-content: center;
        
        > .dash {
            margin: 0px 5px;
        }
    }
`;
