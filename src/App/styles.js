import {createGlobalStyle} from 'styled-components';
import {getColor} from 'styles/helper';

export const GlobalStyle = createGlobalStyle`
    html,body {
        height: 100%;
        width: 100%;
        margin: 0;
    }
    
    * {
        color: ${getColor('text')};
    }
    
  
    body {
        background-color: ${getColor('background')};
        font-family: 'Tinos', 'Roboto', sans-serif !important;
    } 
    
    #app {
        height: 100%;
        width: 100%;
        overflow: hidden;
        
        > * {
            height: 100%;
            width: 100%;
        }
    }
    
    div {
        transition: background-color 300ms, box-shadow 300ms, color 300ms;
    }
    
`;
