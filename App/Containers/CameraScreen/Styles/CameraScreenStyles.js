import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

// theme
import {Metrics, Colors, Images} from '../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  snapBtn: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  snapBtnFeature: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  imgBtn: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    tintColor: Colors.black,
  },
  imgBtnFeature: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    tintColor: Colors.white,
  },
  bottomBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'black',
    width: Metrics.screenWidth,
    bottom: 0,
    padding: 20,
  },
  previewHeaderContainer: {
    flex: 1,
  },
  previewHeader: {
    zIndex: 1,
    position: 'absolute',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: Metrics.screenWidth,
    padding: 15
  },
});
