import {StyleSheet} from 'react-native';

// theme
import { Colors, Metrics } from '../../../Themes'

export default StyleSheet.create({
  viewOnScreen: {
    flex: 1,
  },
  permisionBtn: {
    padding: Metrics.doubleBaseMargin,
  },
  permisionText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Metrics.halfTripleBaseMargin + 2
  },
  emptyText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Metrics.halfTripleBaseMargin + 2
  }
});
