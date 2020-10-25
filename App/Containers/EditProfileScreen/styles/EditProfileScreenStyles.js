import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../../Themes';

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
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    marginVertical: Metrics.baseMargin,
    width: '100%',
    justifyContent: 'space-between'
  },
  btnConfirm: {
    marginBottom: Metrics.baseMargin / 2,
  },
  btnCancel: {
    marginHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.black,
    borderColor: Colors.nightRider,
    borderWidth: 1,
  },
  invalidText: {
    alignSelf: 'center',
    color: 'red',
    marginTop: Metrics.baseMargin,
  },
  input: {
    marginHorizontal: 8,
    paddingHorizontal: Metrics.halfQuintupleBaseMargin,
    marginTop: Metrics.halfQuintupleBaseMargin,
  },
  container: {
    marginTop: Metrics.baseMargin,
  },
  titleStyle: {color:'white'},
  commonBtn: {backgroundColor: 'white'},
  commonIcon: {tintColor: 'black'}
});
