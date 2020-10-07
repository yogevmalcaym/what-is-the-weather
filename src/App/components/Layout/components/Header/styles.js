import {css} from 'styled-components';
import {isMobile, getColor} from 'styles/helper';

export const Header = css`
    z-index: 1;
    width: 100%;
    flex: 0 0 80px;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: ${getColor('background', 'lighter')} 0px 2px 7px 6px;
    
    > h2 {
        margin-left: 10px;
        
        ${isMobile(css`
            margin-left: initial;
        `)};
    
    }
    
    > .theme-toggle-basics {
        height: 40px;
        width: 40px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        letter-spacing: -0.5px;
        cursor: pointer;
        transition: background-color 300ms, box-shadow 300ms;
        position: absolute;
        top: 108px;
        right: 51px;
        
        ${isMobile(css`
            top: 130px;
            right: 18px;
        `)};
    }
    
    > .theme-toggle-dark {
        box-shadow: ${getColor('background', 'light')} 1px 1px 4px 2px;        
        color: initial;
        background-color: ${getColor('background', 'lighter')};    
    }
    
    > .theme-toggle-light {
        background-color: ${getColor('background', 'darker')};
        color: ${getColor('background', 'light')};
        box-shadow: ${getColor('background', 'darker')} 1px 1px 4px 2px;
    }
    
    ${isMobile(css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 0 0 110px;
    `)};
    
   > .navigators-wrapper {
       display: flex;
       padding: 10px 0px;
    
        > a {
            font-size: 18px;
            font-weight: bold;
            border: 1px ${getColor('background', 'dark')} solid;
            box-shadow: ${getColor('background', 'dark')} 0px 0px 2px 2px;
            color: inherit;
            padding: 5px;
            border-radius: 5px;
            text-align: center;
            margin: 0px 10px;
        }
        
        > .active-tag {
            background-color: ${getColor('primary')};
            color: ${getColor('background', 'light')};
            box-shadow: ${getColor('primary')} 0px 0px 2px 2px;
         }
        
        
        ${isMobile(css`
            display: flex;
            width: 100%;
        
                > a {
                    flex-grow: 1;        
                }
        
        `)};     
   } 

`;
