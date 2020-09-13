import {
  PERMISSIONS,
  request,
  RESULTS,
  check,
  openSettings,
} from 'react-native-permissions';
import {View, Alert, Text, TouchableOpacity} from 'react-native';


export function openAppSettings() {
  openSettings().catch(() => console.warn('Cannot open settings'));
}

export const checkPermissionLocation = (callback) => {
  let keyPermission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
  console.log("checkPermissionLocation -> keyPermission", keyPermission)
  if (keyPermission) {
    check(keyPermission)
      .then((result) => {
        if (result === RESULTS.UNAVAILABLE) {
          callback(false)
        }
        if (result === RESULTS.BLOCKED) {
          callback(false)
        }
        if (result === RESULTS.DENIED) {
          request(keyPermission).then((response) => {
            if (response === RESULTS.GRANTED) {
              callback(true)
            }
          })
        }
        if (result === RESULTS.GRANTED) {
          callback(true)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}