import React, {useCallback} from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import {Icon} from "@common-components/Icon/Icon";
import classNames from 'classnames';

export const FavoriteIcon = styled(({className, isFavorite, onClick: _onClick}) => {

        const onClick = useCallback(e => {
                e.stopPropagation()
                _onClick({isFavorite})
            }
            , [isFavorite]);

        return <div {...{onClick, className: classNames(className, 'icon-wrapper')}}>
            <Icon {...{
                name: isFavorite ? 'favorite-filled' : 'favorite-border',
            }}/>
        </div>
    }
)`${styles.FavoriteIcon}`;
