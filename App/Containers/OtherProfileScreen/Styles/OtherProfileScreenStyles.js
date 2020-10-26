import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

// theme
import {Metrics, Colors, Images} from '../../../Themes';

export default StyleSheet.create({
  viewOnScreen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  coverPhoto: {
    height: Metrics.screenHeight / 3.5,
  },
  containerAvatarPhoto: {
    height: Metrics.quintupleBaseMargin * 2,
    width: Metrics.quintupleBaseMargin * 2,
    borderColor: Colors.greyLight,
    alignSelf: 'center',
  },
  avatarPhoto: {
    height: Metrics.quintupleBaseMargin * 2,
    width: Metrics.quintupleBaseMargin * 2,
    borderWidth: 1,
    borderRadius: 100
  },
  nameContaint: {
    marginTop: Metrics.tripleBaseMargin,
    marginBottom: 0,
    paddingTop: Metrics.tripleBaseMargin,
    padding: Metrics.baseMargin,
    margin: Metrics.doubleBaseMargin,
  },
  nameText: {
    fontSize: Metrics.halfQuintupleBaseMargin,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  descriptions: {
    justifyContent: 'center',
    marginHorizontal: Metrics.doubleBaseMargin,
    marginTop: Metrics.baseMargin
  },
  descriptionsText: {
    alignSelf: 'center',
    marginVertical: 4,
    color: Colors.textColors,
  },
  multiplePhotoContainer: {
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.halfTripleBaseMargin,
  },
  cameraContainer: {
    zIndex: 25,
    bottom: -10,
    right: 0,
    padding: 5,
    borderWidth: 1,
    backgroundColor: Colors.backgroundGray,
    position: 'absolute'
  },
  cameraIcon: {
    width: 20,
    height: 20,
    tintColor: Colors.black,
  },
  cameraCoverContainer: {
    position: 'absolute',
    zIndex: 25,
    bottom: 10,
    right: 10,
    padding: 5,
    borderWidth: 1,
    backgroundColor: Colors.backgroundGray,
  },
  headerContainer: {
    borderColor: Colors.pink,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2
  }
});
