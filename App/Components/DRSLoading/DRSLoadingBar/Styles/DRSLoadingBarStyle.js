import {StyleSheet} from 'react-native';

// theme
import { Metrics, Colors } from '../../../../Themes'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Metrics.doubleBaseMargin
  },
  uploadText: {
    marginVertical: 4,
    color: Colors.nightRider
  }
});
