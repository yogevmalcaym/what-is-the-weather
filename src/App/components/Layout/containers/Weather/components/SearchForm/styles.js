import {css} from 'styled-components'
import {getColor} from 'styles/helper';
import {lighten} from 'polished';

export const SearchForm = css`
    margin-bottom: 20px;
    position: relative;
    
    > input {
        border-radius: 5px;
        margin-left: 2px;
    }
    
    > .form-toast {
        position: absolute;
        margin-top: 5px;
        width: 100%;
        padding: 0px 5px;
        
        > .toast-header {
            display: flex;
            justify-content: space-between;
            
            :before {
                content: '';
                width: 12px;
            }
            
        }
    }

    .search-button {
        margin-left: 10px;
        background-color: ${(props) => lighten(0.2, getColor('primary')(props))};
        
        &:hover {
            background-color: ${getColor('primary')};
        } 
        
        &:active {
            background-color: ${(props) => lighten(0.2, getColor('primary')(props))};
        } 
    }
        
`;
