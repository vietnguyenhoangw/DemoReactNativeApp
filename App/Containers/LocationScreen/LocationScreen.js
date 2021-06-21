import {useEffect} from 'react';
import {Alert, AppStateStatus} from 'react-native';

// function
import {checkPermissionLocation} from '../../Functions/PermissionFunction';
import {
  clearWatchPosition,
  getCurrentPosition,
  stopObserving,
  watchPosition,
} from '../../Functions/GeolocationFunction';

// redux
import {useSelector, useDispatch} from 'react-redux';
import AppActions from '../../Redux/AppRedux';

let previousLocation = {
  latitude: 0,
  longitude: 0,
};

const LocationScreen = () => {
  const dispatch = useDispatch();
  const isAllowLocation = useSelector((state) => state.app.isAllowLocation);

  const handleLocation = (position, error) => {
    if (error) {
      console.log(error.message);
      return;
    }
    if (position) {
      const {latitude, longitude} = position.coords;
      if (
        !(
          previousLocation.latitude === latitude ||
          previousLocation.longitude === longitude
        )
      ) {
        previousLocation.longitude = longitude;
        previousLocation.latitude = latitude;
        dispatch(AppActions.setLocation({latitude, longitude}));
      }
    }
  };

  useEffect(() => {
    if (isAllowLocation) {
      getCurrentPosition(handleLocation);
      watchPosition(handleLocation);
    }
  }, [isAllowLocation]);

  useEffect(() => {
    checkPermissionLocation((result) => {
      dispatch(AppActions.setAllowLocation(result));
    });
  });

  return null;
};

export default LocationScreen;
