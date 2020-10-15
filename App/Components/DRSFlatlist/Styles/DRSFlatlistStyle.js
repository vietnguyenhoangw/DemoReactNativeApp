import {StyleSheet} from 'react-native';

// theme
import {Metrics, Images} from '../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyText: {
    marginVertical: Metrics.halfQuintupleBaseMargin,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Metrics.halfTripleBaseMargin + 2
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginTop: Metrics.doubleBaseMargin,
    marginHorizontal: Metrics.halfTripleBaseMargin,
  },
  title: {
    fontSize: 32,
  },
});
