import {View, Text, TextInput} from 'react-native';
import styles from './Styles/RDSTextInputWithTitleStyle';
import React from 'react';
import {Colors} from '../../Themes';

function RDSTextInputWithTitle(
  {
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
    <View>
      {miniTitle && (
        <View
          style={{
            backgroundColor: Colors.backgroundGray,
            position: 'absolute',
            marginHorizontal: 16,
            zIndex: 1,
            paddingHorizontal: 8,
            marginTop: 2,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
            }}>
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
