import { StyleSheet } from 'react-native'

// theme
import { Colors, Metrics } from '../../../../Themes'

export default StyleSheet.create({
  listImageWrapper: {
    flexDirection: 'row',
    height: Metrics.screenHeight * 0.15,
    width: Metrics.screenWidth,
    backgroundColor: Colors.greyLight
  },
  image: {
    flex: 1,
    width: Metrics.screenWidth * 0.34 - 2,
    resizeMode: 'cover',
    backgroundColor: Colors.greyLight,
    borderColor: Colors.veryLightGrey,
    borderWidth: 1,
  },
  btnContainer: {
    padding: 0
  }
})
