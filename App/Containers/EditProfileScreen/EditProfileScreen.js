import React, {useState, useEffect, useRef} from 'react';
import {
  Keyboard,
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaViewComponent,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

// styles
import styles from './styles/EditProfileScreenStyles';

// components
import {RDSTextInputWithTitle, DRSTextButton} from '../../Components/index';

// redux
import {useSelector, useDispatch} from 'react-redux';

// utils
import {isValidTextWithLength} from '../../Utils/Validator';

function EditProfileScreen({navigation: {goBack}}) {
  const userState = useSelector((state) => state.auth);
  const userData = userState.userData.user;
  const featuredPhotos = userData.featuredPhotos;
  const refAnimation = useRef(null);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [descriptions, setDescriptions] = useState(userData.descriptions);
  const [dob, setDob] = useState(userData.dob);
  const [badInput, setBadInput] = useState(false);
  const [badInputField, setBadInputField] = useState(false);

  let newImageUrlList = [];
  featuredPhotos.filter((item) => {
    newImageUrlList.push(item.url);
  });

  const onChangeFirstName = (firstNameInput) => {
    if (isValidTextWithLength(firstNameInput, 2, 8) || firstNameInput) {
      setBadInputField('First Name');
      setBadInput(true);
    } else {
      setFirstName(firstNameInput.trim());
      setBadInput(false);
    }
  };

  const onChangeLastName = (lastNameInput) => {
    setLastName(lastNameInput.trim());
  };

  const onChangeDescription = (descriptionInput) => {
    setDescriptions(descriptionInput);
  };

  const onBackPress = () => {
    goBack();
  };

  const validateInput = () => {};

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false),
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (!isKeyboardVisible) {
      refAnimation &&
        refAnimation.current &&
        refAnimation.current.fadeInUp(400);
    } else {
      refAnimation &&
        refAnimation.current &&
        refAnimation.current.fadeOutDown(400);
    }
  }, [isKeyboardVisible]);

  return (
    <View style={styles.multiplePhotoContainer}>
      {badInput && (
        <Text style={styles.invalidText}>{`${badInputField} is invalid`}</Text>
      )}
      <RDSTextInputWithTitle
        textInputTitle={{marginHorizontal: 8, paddingHorizontal: 8}}
        miniTitle={'First Name'}
        placeholder={'First Name'}
        value={firstName}
        onChangeText={(firstNameInput) => onChangeFirstName(firstNameInput)}
      />
      <RDSTextInputWithTitle
        textInputTitle={{marginHorizontal: 8, paddingHorizontal: 8}}
        miniTitle={'Last Name'}
        placeholder={'Last Name'}
        value={lastName}
        onChangeText={(lastNameInput) => onChangeLastName(lastNameInput)}
      />
      <RDSTextInputWithTitle
        textInputTitle={{marginHorizontal: 8, paddingHorizontal: 8}}
        miniTitle={'Descriptions'}
        placeholder={'Descriptions'}
        value={descriptions}
        onChangeText={(descriptionsInput) =>
          onChangeDescription(descriptionsInput)
        }
      />
      <RDSTextInputWithTitle
        textInputTitle={{marginHorizontal: 8, paddingHorizontal: 8}}
        miniTitle={'Day of birth'}
        placeholder={'Day of birth'}
        value={dob}
      />
      <Animatable.View
        style={styles.btnContainer}
        ref={refAnimation}
        easing={'ease-in'}>
        <DRSTextButton
          title={'Confirm'}
          conatinerStyle={styles.btnConfirm}
          onPress={validateInput}
        />
        <DRSTextButton
          title={'Cancel'}
          conatinerStyle={styles.btnCancel}
          onPress={onBackPress}
        />
      </Animatable.View>
    </View>
  );
}

export default EditProfileScreen;
