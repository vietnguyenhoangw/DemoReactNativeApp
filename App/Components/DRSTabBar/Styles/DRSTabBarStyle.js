import {StyleSheet} from 'react-native';

// theme
import { Colors, Metrics } from '../../../Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: Metrics.baseMargin,
    paddingHorizontal: Metrics.halfTripleBaseMargin,
    backgroundColor: Colors.white,
    paddingBottom: Metrics.baseMargin
  },
  tabButton: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  iconButton: {
    width: 20,
    height: 20
  },
  iconButtonRadius: {
    width: 22,
    height: 22,
    borderRadius: 22 / 2
  }
});