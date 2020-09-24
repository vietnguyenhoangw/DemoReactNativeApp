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

/**
 * in android mainifrest using write and read extenal 
 * but in react native just need to check sorage permission is enough
 * because storage include write extenal and read extenal in android.
 */
export const checkPhotoLibraryPermission = (callback) => {
  let libraryPermission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.PHOTO_LIBRARY
      : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
  check(libraryPermission)
    .then((result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)'
          )
          break
        case RESULTS.BLOCKED:
          Alert.alert('Permission', 'Update your library permission', [
            {
              text: 'OK',
              onPress: () => {
                openAppSettings()
              }
            }
          ])
          break
        case RESULTS.DENIED:
          request(libraryPermission).then((result) => {
            if (result === RESULTS.GRANTED) {
              callback()
            }
          })
          break
        case RESULTS.GRANTED:
          callback()
          break
      }
    })
    .catch((error) => {
      console.log('Error on check library permission: ', error)
    })
}


export const checkCameraPermission = (callback) => {
  let cameraPermission = PERMISSIONS.ANDROID.CAMERA
  check(cameraPermission)
    .then((result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)'
          )
          break
        case RESULTS.BLOCKED:
          Alert.alert('Permission', 'Update your camera permission', [
            {
              text: 'OK',
              onPress: () => {
                openAppSettings()
              }
            }
          ])
          break
        case RESULTS.DENIED:
          request(cameraPermission).then((result) => {
            if (result === RESULTS.GRANTED) {
              callback()
            }
          })
          break
        case RESULTS.GRANTED:
          callback()
          break
      }
    })
    .catch((error) => {
      console.log('Error on check library permission: ', error)
    })
}

export const checkPermissionLocation = (callback) => {
  let keyPermission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
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