import {StyleSheet} from 'react-native';

// theme
import { Metrics, Colors } from '../../../Themes/index'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: Colors.backgroundGray,
  },
  loadingWrapper: {
    backgroundColor: Colors.transparent,
    position: 'absolute',
    zIndex: 1000,
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
