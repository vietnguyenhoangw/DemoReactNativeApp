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
    borderColor: Colors.black,
    borderWidth: 1.5,
    position: 'absolute',
    top: Metrics.screenHeight / 4.8,
    left: Metrics.screenWidth / 2.8,
  },
  avatarPhoto: {
    height: Metrics.quintupleBaseMargin * 2,
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
    backgroundColor: Colors.greyLight,
    padding: Metrics.baseMargin,
    marginHorizontal: Metrics.doubleBaseMargin,
  },
  descriptionsText: {
    marginVertical: 4
  },
  multiplePhotoContainer: {
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin * 2,
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
  }
});
