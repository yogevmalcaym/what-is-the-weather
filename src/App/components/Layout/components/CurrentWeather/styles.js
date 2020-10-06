import {css} from 'styled-components'
import {getColor} from "styles/helper";
import {transparentize} from 'polished';

export const CurrentWeather = css`
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
    min-width: 200px;
    height: auto;
    
    > .header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        
        :before {
          content: '';
          flex: 1;
        }
        
        > h4 {
            flex: 6; 
            border-bottom: 1px solid ${getColor('primary')};
            margin: 0px 20px;         
        }
        
        > .icon-aligner {
            align-self: flex-start;
            margin-top: 3px;
            flex: 1;
            display: flex;
            justify-content: center;                                         
        }
          
    }
    
    > * {
        flex: 1 1;
    }
    
    > .temperatures-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-top: 2px solid ${props => transparentize(0.5, getColor('background')(props))};
        padding-top: 10px;
        margin-top: 10px;
        
        > .temperatures-heading {
            margin: auto;
            width: fit-content;
            padding: 0px 5px;
            border-bottom: 1px solid ${getColor('primary')};
        }
        
        > .degrees-wrapper {
            display: flex;
            justify-content: center;
            margin-top: 5px;
        
            > div {
                margin: 0px 10px;
            }
            
        }                
        
    }
    
    > a {
        margin-top: 10px;
        font-size: 14px;
        word-spacing: -0.6px;
        letter-spacing: -0.5px;
    }
`;
