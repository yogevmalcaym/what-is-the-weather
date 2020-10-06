import React, {useMemo, useCallback, memo} from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';
import {Loader, FavoriteIcon, Degrees} from '@common-components';
import * as consts from "./consts";
import {PCMediaQuery, MobileMediaQuery} from 'styles/helper';

const Link = ({url}) => {
    const onClick = useCallback(e => {
        e.stopPropagation();
        e.preventDefault();
        window.open(url);
    }, [url])

    return <a {...{href: "", onClick}}>{consts.LINK}</a>
};

export default styled(memo(({className, isFavorite, data, city, onClick: _onClick, onFavoriteIconClicked}) => {

    const onClick = useCallback(() => _onClick && _onClick(city), [city]);

    const onIconClicked = useCallback(({isFavorite}) =>
            onFavoriteIconClicked({key: city.key, isFavorite})
        , [city.key, onFavoriteIconClicked]);

    const temperaturesContent = useMemo(() =>
            <div className='temperatures-wrapper'>
                <span className='temperatures-heading'>{consts.TEMPERATURES_HEADING}</span>

                <div className='degrees-wrapper'>
                    {data && data.Temperature && Object.keys(data.Temperature).map(tempType =>
                        <Degrees {...{
                            key: tempType,
                            type: tempType,
                            value: data.Temperature[tempType].Value,
                            unit: data.Temperature[tempType].Unit
                        }}/>
                    )}
                </div>

            </div>
        , [data && data.Temperature]);


    return <div {...{className: classNames(className, 'current-weather'), onClick}}>
        {!data ?
            <Loader/> :
            <>
                <div className='header'>
                    <h4>{city.name}</h4>
                    <div className='icon-aligner'>
                        <FavoriteIcon {...{
                            onClick: onIconClicked,
                            isFavorite
                        }}/>
                    </div>

                </div>
                <span>{data.IsDayTime ? consts.DAY_TIME : consts.NIGHT_TIME}</span>
                <span>{data.WeatherText}</span>
                {temperaturesContent}
                <PCMediaQuery><Link url={data.Link}/></PCMediaQuery>
                <MobileMediaQuery><Link url={data.MobileLink}/></MobileMediaQuery>
            </>}
    </div>;

}))`${styles.CurrentWeather}`;
