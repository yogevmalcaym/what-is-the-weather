import React from 'react';
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md';
import * as consts from './consts';

export const Icon = ({className, name, onClick}) => {
    switch (name) {
        case consts.FAVORITE_BORDER:
            return <MdFavoriteBorder {...{className, onClick}}/>
        case consts.FAVORITE_FILLED:
            return <MdFavorite {...{className, onClick}}/>
    }
}
