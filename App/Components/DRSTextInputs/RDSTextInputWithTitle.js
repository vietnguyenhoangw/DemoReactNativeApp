import {View, Text, TextInput} from 'react-native';
import styles from './Styles/RDSTextInputWithTitleStyle';
import React from 'react';
import {Colors} from '../../Themes';

function RDSTextInputWithTitle(
  {
    container,
    miniTitleStyle,
    miniTitle,
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
    <View style={container}>
      {miniTitle && (
        <View
          style={styles.textContainer}>
          <Text
            style={[{
              fontWeight: 'bold',
            }, miniTitleStyle]}>
            {miniTitle}
          </Text>
        </View>
      )}
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
    </View>
  );
}

const forwardInput = React.forwardRef(RDSTextInputWithTitle);

export default forwardInput;
