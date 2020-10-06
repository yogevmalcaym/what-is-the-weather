import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';
import * as consts from './consts'
import {Degrees} from '@common-components'

export default styled(({className, Date: _date, Day, Night, Temperature}) => {
    const dateText = consts.DAYS_TO_TEXT[new Date(_date).getDay()];

    return <div {...{className: classNames(className, 'day')}}>

        <div className='header'>
            <span className='date'>{dateText}</span>
        </div>

        <div className='day'>
            <span>{consts.DAY}</span>
            <span>{consts.DASH}</span>
            <span className='phrase'>{Day.IconPhrase}</span>
        </div>

        <div className='night'>
            <span>{consts.NIGHT}</span>
            <span>{consts.DASH}</span>
            <span className='phrase'>{Night.IconPhrase}</span>
        </div>

        <div className='range'>
            <Degrees {...{value: Temperature.Minimum.Value, unit: Temperature.Minimum.Unit}}/>
            <span className='dash'>{consts.DASH}</span>
            <Degrees {...{value: Temperature.Maximum.Value, unit: Temperature.Maximum.Unit}}/>
        </div>

    </div>
})`${styles.Day}`;

