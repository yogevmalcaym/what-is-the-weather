import React, {memo} from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import classNames from 'classnames';
import * as consts from './consts';

export default styled(memo(({className, globalError}) =>
    globalError ?
        <div {...{className: classNames(className, 'error-modal')}}>
            <div className='box'>

                <h1>{consts.HEADING}</h1>
                <h3>{consts.TEXT}</h3>

            </div>
        </div> : null)
)`${styles.ErrorModal}`;
