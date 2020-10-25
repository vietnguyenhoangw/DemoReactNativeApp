import { StyleSheet } from 'react-native'

// theme
import { Colors, Metrics } from '../../../../Themes'

export default StyleSheet.create({
  listImageWrapper: {
    flexDirection: 'row',
  },
  image: {
    width: Metrics.screenWidth * 0.34 - 2,
    height: Metrics.screenWidth * 0.34 - 2,
    resizeMode: 'cover',
    backgroundColor: Colors.greyLight,
    borderColor: Colors.greyLight,
    borderWidth: 1
  },
  btnContainer: {
    padding: 0
  }
})
