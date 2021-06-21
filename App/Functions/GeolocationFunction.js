import {Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

let watchId = null;

export function getCurrentPosition(callback) {
  if (Platform.OS === 'ios') {
    Geolocation.setRNConfiguration({
      skipPermissionRequests: true,
      authorizationLevel: 'whenInUse',
    });
  }

  Geolocation.getCurrentPosition(
    (position) => {
      callback(position, null);
    },
    (error) => {
      callback(null, error);
    },
    {enableHighAccuracy: true, timeout: 15000},
  );
}

export function watchPosition(callback) {
  if (watchId === null) {
    watchId = Geolocation.watchPosition(
      (geoPosition) => {
        callback(geoPosition, null);
      },
      (error) => {
        callback(null, error);
      },
      {maximumAge: 0, distanceFilter: 300},
    );
  }
}

export function clearWatchPosition() {
  if (watchId !== null) {
    Geolocation.clearWatch(watchId);
  }
}

export function stopObserving() {
  if (watchId !== null) {
    Geolocation.stopObserving();
    watchId = null;
  }
}
