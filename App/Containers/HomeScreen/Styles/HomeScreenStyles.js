import {StyleSheet} from 'react-native';

// theme
import {Metrics} from '../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  viewOnScreen: {
    flex: 1,
    justifyContent: 'center',
  },
  listContainer: {
    backgroundColor: Colors.white,
  },
  permissionBtn: {
    padding: Metrics.doubleBaseMargin,
  },
  permissionText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Metrics.halfTripleBaseMargin + 2,
  },
});
