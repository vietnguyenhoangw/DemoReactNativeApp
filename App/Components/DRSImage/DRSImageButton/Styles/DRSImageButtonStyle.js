import { StyleSheet } from 'react-native'
import { Colors } from '../../../../Themes'

export default StyleSheet.create({
  containerStyle: {
    flex: 1
  },
  containerCameraIcon: {
    position: 'absolute',
    right: 8,
    top: 8,
    height: 20,
    width: 20
  },
  cameraIcon: {
    position: 'absolute',
    zIndex: 10,
    height: 20,
    width: 20,
    tintColor: Colors.nightRider
  }
})
