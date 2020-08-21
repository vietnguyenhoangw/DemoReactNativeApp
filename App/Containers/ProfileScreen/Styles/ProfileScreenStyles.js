import {
    StyleSheet
} from 'react-native';

// theme
import { Metrics, Colors, Images } from '../../../Themes'

export default StyleSheet.create({
    viewOnScreen: {
        flex: 1,
        backgroundColor: Colors.white
    },
    coverPhoto: {
        height: Metrics.screenHeight / 3.5
    },
    avatarPhoto: {
        height: Metrics.quintupleBaseMargin * 2,
        width: Metrics.quintupleBaseMargin * 2,
        borderColor: Colors.black,
        borderWidth: 1.5,
        position: 'absolute',
        top: Metrics.screenHeight / 4.8,
        left: Metrics.screenWidth / 2.8,
        zIndex: 1
    },
    nameContaint: {
       marginTop: Metrics.tripleBaseMargin,
       marginBottom: 0,
       paddingTop: Metrics.tripleBaseMargin,
       padding: Metrics.baseMargin,
       margin: Metrics.doubleBaseMargin
    },
    nameText: {
        fontSize: Metrics.halfQuintupleBaseMargin,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    descriptions: {
        backgroundColor: Colors.greyLight,
        padding: Metrics.baseMargin,
        marginHorizontal: Metrics.doubleBaseMargin,
    }, 
    descriptionsText: {
        textAlign: 'center'
    },
    multiplePhotoContainer: {
        marginTop: Metrics.doubleBaseMargin
    }
});
