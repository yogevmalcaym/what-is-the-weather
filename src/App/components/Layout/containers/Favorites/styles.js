import {css} from 'styled-components'
import {getColor, isMobile} from 'styles/helper';
import {darken} from 'polished';

export const Favorites = css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > h2 {
        padding: 0px 10px;
        border-bottom: 2px solid ${getColor('primary')};
    }
    
    > .content{
        flex-wrap: wrap;
        display: flex;
        padding: 30px;
        align-content: center;
        justify-content: center;
        width: 100%;
        
        ${isMobile(css`
            flex-direction: column;
        `)};
        
        > .favorite-card {
            border-radius: 5px;
            min-height: 230px;
            width: 200px;
            box-shadow: 0px 0px 3px 1px ${getColor('primary')};    
            background-color: ${getColor('background', 'dark')};
            padding: 0px 5px;
            
            &:hover {
                background-color: ${(props) => darken(0.1, getColor('background', 'dark')(props))};
                box-shadow: 0px 0px 3px 2px ${getColor('primary')};
            };
            
            ${isMobile(css`
                width: 100%;    
            `)};
            
        }
    }    
`;
