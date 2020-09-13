import {useEffect} from 'react';
import {Alert, AppStateStatus} from 'react-native';

// function
import {checkPermissionLocation} from '../../Functions/PermissionFunction';

// redux
import {useSelector, useDispatch} from 'react-redux';
import AppActions from '../../Redux/AppRedux';


const LocationScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    checkPermissionLocation((result) => {
      console.log('LocationScreen -> result', result);
      dispatch(AppActions.setAllowLocation(result));
    });
  }, []);

  return null;
};

export default LocationScreen;
