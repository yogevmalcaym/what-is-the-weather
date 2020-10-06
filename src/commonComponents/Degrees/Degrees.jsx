import React from 'react';
import styled from 'styled-components';
import * as styles from './styles';

export const Degrees = styled(({className, value, unit, type}) =>
    <div {...{className}}>
        {type && <div className='header'>{type}</div>}
        <div className='content'>
            <span className='value'>{value}</span>
            <span>{unit}</span>
        </div>
    </div>
)`${styles.Degrees}`;
