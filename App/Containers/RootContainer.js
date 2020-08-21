import React, { useEffect } from 'react';

// redux
import {useSelector, useDispatch} from 'react-redux';
import StartupActions from '../Redux/StartupRedux'

// Navigation
import AppNavigation from './AppNavigation'

function RootContainer() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(StartupActions.startup())
    }, [])

    return (
        <>
            <AppNavigation />
        </>
    )
}

export default RootContainer