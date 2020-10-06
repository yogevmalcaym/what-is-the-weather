import {css} from 'styled-components';
import {isMobile, getColor} from 'styles/helper';

export const ErrorModal = css`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: ${getColor('background', 'lighter')};

    
    .box {
        margin: auto;
        box-shadow: 0px 0px 3px 1px ${getColor('danger')};
        border: 2px solid red;
        border-radius: 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
        width: 500px;
        padding: 100px 30px;
    
        ${isMobile(css`
            margin: auto 10px;
            width: 100%;
            padding: 30px 5px;
        `)};
        
    }
    

`;
