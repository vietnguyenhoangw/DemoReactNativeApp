import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export default metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    smallMargin: 5,
    baseMargin: 10,
    halfTripleBaseMargin: 15,
    doubleBaseMargin: 20,
    halfQuintupleBaseMargin: 25,
    tripleBaseMargin: 30,
    quadrupleBaseMargin: 40,
    quintupleBaseMargin: 50,
    tabBarHeight: 60,
    borderRadiusSmall: 8
}