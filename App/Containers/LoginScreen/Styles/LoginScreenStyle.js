import {StyleSheet} from 'react-native';

// theme
import { Metrics } from '../../../Themes/index'

export default StyleSheet.create({
  viewOnScreen: {
    width: '100%',
    height: '100%',
  },
  viewHeader: {
    width: '100%',
  },
  textTitle: {
    marginTop: 100,
    fontWeight: 'bold',
    fontSize: 40,
    paddingLeft: Metrics.doubleBaseMargin
  },
  distanceInput: {
    marginTop: Metrics.baseMargin
  },
  body: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: Metrics.doubleBaseMargin,
    justifyContent: 'space-between'
  },
  image: {
    width: Metrics.screenWidth - 40,
    height: Metrics.screenHeight / 3
  },
  submitBtn: {
    marginHorizontal: 0,
    alignSelf: 'flex-end'
  }
});
