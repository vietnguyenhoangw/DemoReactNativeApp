import {StyleSheet} from 'react-native';
import { Metrics, Colors } from '../../../Themes';

export default StyleSheet.create({
    multiplePhotoContainer: {
        flexGrow: 1,
    },
    btnFeaturedPhotos: {
        backgroundColor: Colors.veryLightGrey,
        margin: Metrics.baseMargin,
        padding: Metrics.baseMargin,
    },
    textBtnFeaturedPhotos: {
        textAlign: 'center',
    },
    btnContainer: {
        position:'absolute',
        bottom: 0,
        marginVertical: Metrics.baseMargin,
        width: '100%',
    },
    btnConfirm: {
        marginBottom: Metrics.baseMargin / 2,
        marginHorizontal: Metrics.baseMargin,
    }, 
    btnCancel: {
        marginHorizontal: Metrics.baseMargin,
        backgroundColor: Colors.transparent,
        borderColor: Colors.nightRider,
        borderWidth: 1
    },
    invalidText: {
        alignSelf: 'center',
        color: 'red',
        marginTop: Metrics.baseMargin
    }
})