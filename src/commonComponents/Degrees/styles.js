import {css} from 'styled-components';
import {getColor} from 'styles/helper';

export const Degrees = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    > .header {
        padding: 0px 5px;
        border-bottom: 1px solid ${getColor('primary')};
    }
    
    > .content {
    
        > .value {
            font-size: 15px;
            margin-right: 2px;
            
            &:after {
                content: '°';  
            }
        }
    
    }
    
`;
