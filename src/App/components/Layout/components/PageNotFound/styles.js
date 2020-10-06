import {css} from 'styled-components';

export const PageNotFound = css`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: white;
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;

    > img {
        z-index: 1;
        max-height: 100%;
        width: 100%;
        margin: auto;
    }
`;
