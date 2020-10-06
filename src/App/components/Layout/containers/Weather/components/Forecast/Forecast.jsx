import React, {memo} from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';
import * as consts from './consts'
import Day from "./components/Day/Day";

export default styled(memo(({className, data = {}}) =>
    <div {...{className: classNames(className, 'forecast')}}>
        <h3 className='forecast-heading'>{consts.HEADING}</h3>
        <div className='summary-text'><span>{consts.SUMMARY}</span>{data.Headline.Text} .</div>
        <div className='daily-forecasts'>
            {data.DailyForecasts.map((dailyForecast) =>
                <Day {...{key: dailyForecast.Date, ...dailyForecast}}/>)}
        </div>
    </div>
))`${styles.Forecast}`;
