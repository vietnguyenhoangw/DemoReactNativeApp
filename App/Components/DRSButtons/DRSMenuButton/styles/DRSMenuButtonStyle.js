import { StyleSheet } from 'react-native'

// theme
import { Colors, Metrics } from '../../../../Themes'

export default StyleSheet.create({
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
    marginTop: 20,
    marginHorizontal: Metrics.doubleBaseMargin,
    padding: Metrics.baseMargin,
    backgroundColor: Colors.greyLight
  },
  commonBtn: {
    borderWidth: 1,
    borderColor: Colors.white,
    width: Metrics.quadrupleBaseMargin * 2,
    height: Metrics.quadrupleBaseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.nightRider
  },
  commonIcon: {
    tintColor: Colors.white,
    width: Metrics.doubleBaseMargin,
    height: Metrics.doubleBaseMargin,
  },
  textItemMenu: {
    color: Colors.nightRider,
    marginLeft: Metrics.baseMargin,
    fontWeight: 'bold'
  }
})