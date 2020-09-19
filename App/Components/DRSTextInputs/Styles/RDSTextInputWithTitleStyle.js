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
    borderWidth: 1,
    fontSize: 18,
    paddingBottom: 10,
    color: Colors.nightRider,
    marginTop: 10
  }
});
