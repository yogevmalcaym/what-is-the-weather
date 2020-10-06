import {css} from 'styled-components';
import {getColor} from 'styles/helper';

export const FavoriteIcon = css`
    border-radius: 2px;
    padding: 5px;
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 3px 1px ${getColor('background', 'lighter')};
    
    &:hover {
        box-shadow: 0px 0px 5px 2px ${getColor('background', 'lighter')};
    }
`;
