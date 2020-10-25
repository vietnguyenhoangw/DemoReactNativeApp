import {StyleSheet} from 'react-native';

// styles
import { Colors } from '../../../Themes/index'

export default StyleSheet.create({
  textTitle: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 20,
    marginBottom: 10,
  },
  textInput: {
    borderRadius: 50,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 20,
    padding: 15,
  },
  input: {
    backgroundColor: Colors.white,
    fontSize: 18,
    padding: 15,
    color: Colors.nightRider,
    borderRadius: 100,
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2
  },
  textContainer: {
    backgroundColor: Colors.backgroundGray,
    position: 'absolute',
    marginHorizontal: 20,
    zIndex: 1,
    paddingHorizontal: 8,
    marginTop: 2,
  }
});
