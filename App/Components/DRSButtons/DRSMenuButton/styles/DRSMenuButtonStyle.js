import { StyleSheet } from 'react-native'

// theme
import { Colors, Metrics } from '../../../../Themes'

export default StyleSheet.create({
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
    marginTop: Metrics.baseMargin,
    marginHorizontal: Metrics.doubleBaseMargin,
    padding: Metrics.baseMargin,
    paddingHorizontal: Metrics.halfTripleBaseMargin,
    backgroundColor: Colors.white,
    borderRadius: 100,
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation:2,
  },
  commonBtn: {
    borderColor: Colors.white,
    width: Metrics.quadrupleBaseMargin,
    height: Metrics.quadrupleBaseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.nightRider,
    borderRadius: 100,
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