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
    paddingBottom: Metrics.baseMargin,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  tabButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
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