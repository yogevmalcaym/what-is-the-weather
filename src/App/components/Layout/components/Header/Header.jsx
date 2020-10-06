import React, {memo} from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import classNames from 'classnames';
import * as consts from './consts';
import {Link} from '@reach/router';
import * as layoutConsts from '../../consts';
import {WEATHER_PAGE_URL, FAVORITES_PAGE_URL} from '../../consts';

export default styled(memo(({className, toggleTheme, currentTheme, pathname}) =>
    <div {...{className: classNames(className, 'header')}}>
        <h2>{consts.HEADING}</h2>
        <span {...{
            onClick: toggleTheme,
            className: classNames('theme-toggle-basics', `theme-toggle-${currentTheme}`)
        }}>
            {consts.THEME_TEXTS[currentTheme]}
        </span>
        <div {...{className: 'navigators-wrapper'}}>
            <Link {...{
                to: layoutConsts.WEATHER_PAGE_URL,
                className: pathname === WEATHER_PAGE_URL ? consts.ACTIVE_TAG_CLASS_NAME : null
            }}>{consts.WEATHER}</Link>
            <Link {...{
                to: layoutConsts.FAVORITES_PAGE_URL,
                className: pathname === FAVORITES_PAGE_URL ? consts.ACTIVE_TAG_CLASS_NAME : null
            }}>{consts.FAVORITES}</Link>
        </div>
    </div>)
)`${styles.Header}`;
