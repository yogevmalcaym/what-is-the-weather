import React from 'react';
import styled from 'styled-components';
import * as styles from './styles';

export const Button = styled(({className, children}) =>
    <button {...{className}}>{children}</button>
)`${styles.Button}`;
