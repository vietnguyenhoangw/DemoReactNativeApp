import React, {useEffect} from 'react';

// redux
import {useDispatch} from 'react-redux';
import StartupActions from '../Redux/StartupRedux';

// Navigation
import AppNavigation from './AppNavigation';

// screen
import {LocationScreen} from '../Containers/LocationScreen';

function RootContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StartupActions.startup());
  }, []);

  return (
    <>
      <AppNavigation />
      <LocationScreen />
    </>
  );
}

export default RootContainer;
