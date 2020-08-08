import {View, Text, TextInput} from 'react-native';
import styles from './Styles/RDSTextInputWithTitleStyle';
import React from 'react';

function RDSTextInputWithTitle(
  {
    textInputTitle,
    placeholder,
    secureTextEntry,
    onChangeText,
    value,
    returnKeyType,
    onSubmitEditing,
  },
  ref,
) {
  return (
      <TextInput
        style={[styles.input, textInputTitle]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        ref={ref}
      />
  );
}

const forwardInput = React.forwardRef(RDSTextInputWithTitle);

export default forwardInput;
