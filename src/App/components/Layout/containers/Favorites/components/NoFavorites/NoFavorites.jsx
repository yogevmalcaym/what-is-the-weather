import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';
import * as consts from './consts';

export default styled(({className}) =>
    <div {...{className: classNames(className, 'no-favorites')}}>
        {consts.NO_FAVORITES}
    </div>
)`${styles.NoFavorites}`;
