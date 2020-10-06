import React, {useState, useEffect, useCallback, memo} from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';
import * as consts from './consts'
import {Button} from "@common-components/Button/Button";
import {Toast} from "react-bootstrap";

export default styled(memo(({className, textValue, onSubmit: _onSubmit, error: outerError, clearError: clearOuterError}) => {

        const [text, setText] = useState(textValue);
        const [showToast, setShowToast] = useState(false);
        const [error, setError] = useState(null);

        useEffect(() => {
            if (error) setShowToast(true);
            else setShowToast(false);
        }, [error]);

        useEffect(() => {
            if (outerError) setError(outerError);
        }, [outerError]);

        useEffect(() => {
            setText(textValue);
        }, [textValue]);

        const clearError = useCallback(() => {
            setError(null);
            if (outerError) clearOuterError();
        }, [setError, outerError]);

        const onSubmit = useCallback(e => {
            e.preventDefault();
            clearError();
            _onSubmit({name: text});
        }, [showToast, setShowToast, _onSubmit, text]);

        const onChange = useCallback(e => {
            clearError();
            if (/^[a-zA-Z ]+$/.test(e.target.value) || e.target.value === '')
                setText(e.target.value);
            else
                setError(consts.ONLY_ENGLISH_LETTERS);
        }, [setText, showToast, setShowToast]);

        return <form {...{className: classNames(className, 'search-form'), onSubmit}}>
            <input {...{value: text || "", onChange}}/>
            <Button className='search-button'>{consts.SEARCH_BUTTON}</Button>
            <Toast {...{show: showToast, onClose: clearError, className: "form-toast"}}>
                <Toast.Header>{consts.TOAST_HEADER_TEXT}</Toast.Header>
                <Toast.Body>{error}</Toast.Body>
            </Toast>
        </form>
    }
))
    `${styles.SearchForm}`;
