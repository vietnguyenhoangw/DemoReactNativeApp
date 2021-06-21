import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';

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
    borderColor: Colors.greyLight,
    borderWidth: 1,
    borderRadius: 100,
  },
  nameContain: {
    marginBottom: 0,
    padding: Metrics.baseMargin,
    margin: Metrics.doubleBaseMargin,
  },
  nameText: {
    fontSize: Metrics.halfQuintupleBaseMargin,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.textColors,
  },
  descriptions: {
    justifyContent: 'center',
    marginHorizontal: Metrics.doubleBaseMargin,
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
    backgroundColor: Colors.greyLight,
    position: 'absolute',
    borderRadius: 100,
    borderColor: Colors.greyLight,
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
    padding: Metrics.smallMargin,
    borderWidth: 1,
    backgroundColor: Colors.backgroundGray,
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  headerContainer: {
    borderColor: Colors.pink,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
});
