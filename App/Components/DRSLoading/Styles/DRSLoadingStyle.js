import {StyleSheet} from 'react-native';

// theme
import { Metrics } from '../../../Themes/index'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: Colors.transparent
  },
  loadingWrapper: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: Colors.blackOpacity,
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
