import React from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import notFoundImage from './assets/404-error-page-not-found.jpg';

export default styled(({className}) =>
    <div {...{className}}>
        <img {...{src: notFoundImage}}/>
    </div>
)`${styles.PageNotFound}`;
