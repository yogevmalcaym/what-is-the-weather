import {css} from 'styled-components'
import {getColor} from 'styles/helper';

export const Layout = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    
    > .router {
        background-color: ${getColor('background', 'lighter')};
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 100%;
        padding: 20px;
        overflow: auto;
    }
`;
