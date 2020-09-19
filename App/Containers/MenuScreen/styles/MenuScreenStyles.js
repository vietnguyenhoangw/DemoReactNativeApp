import {
    StyleSheet
} from 'react-native';
import { Metrics, Colors } from '../../../Themes'

export default StyleSheet.create({
    viewOnScreen: {
        flex: 1
    },
    profileContainer: {
        padding: 10,
        marginHorizontal: Metrics.doubleBaseMargin,
        marginTop: Metrics.baseMargin,
        backgroundColor: Colors.greyLight,
        flexDirection: 'row'
    },
    avatarImage: {
        width: Metrics.quadrupleBaseMargin * 2,
        height: Metrics.quadrupleBaseMargin * 2,
        borderColor: Colors.nightRider,
        borderWidth: 1
    },
    nameText: {
        fontSize: Metrics.halfQuintupleBaseMargin,
        fontWeight: 'bold',
        marginHorizontal: Metrics.baseMargin,
        marginTop: Metrics.baseMargin
    },
    descriptionNameText: {
        marginHorizontal: Metrics.baseMargin,
        marginTop: Metrics.baseMargin
    }
});
