import {Text, TouchableOpacity} from 'react-native';
import styles from './Styles/RDSButtonStyle';
import React from 'react';

function RDSTextInputWithTitle({btnTitle, onPress}, ref) {
  return (
    <TouchableOpacity style={styles.btn} ref={ref} onPress={onPress}>
      <Text style={styles.textBtn}>{btnTitle}</Text>
    </TouchableOpacity>
  );
}

const forwardInput = React.forwardRef(RDSTextInputWithTitle);
export default forwardInput;
