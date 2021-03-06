import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Alert, ScrollView} from 'react-native';

// redux
import {useSelector, useDispatch} from 'react-redux';
import AuthActions from '../../Redux/AuthRedux';

// import styles
import styles from './Styles/LoginScreenStyle';

// import validate
import {isValidEmail, isValidPassword} from '../../Utils/Validator';

// components
import {
  RDSTextInputWithTitle,
  RDSLinkButton,
  DRSLoading,
  DRSHeader,
  DRSImage,
  DRSMenuButton,
} from '../../Components/index';

// themes
import {Images} from '../../Themes';

function LoginScreen({navigation}) {
  const userState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const requestLogin = (email, password) =>
    dispatch(AuthActions.loginEmailRequest(email, password));
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginEmail, setIsLoginEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const passwordRef = useRef(null);
  const userData = userState.userData;

  const {fetchingLoginEmail, errorLoginEmail} = userState;

  useEffect(() => {
    if (!fetchingLoginEmail && isLoginEmail) {
      if (errorLoginEmail) {
        logMessage('Account Incorrect.');
      } else {
        if (userData) {
          navigation.reset({
            index: 0,
            routes: [{name: 'AppStack'}],
          });
        }
      }
      setIsLoginEmail(true);
      setIsLoading(false);
    }
  }, [userState, isLoginEmail, fetchingLoginEmail]);

  const logMessage = (message) => {
    Alert.alert(message, null, [{text: 'OK'}], {cancelable: false});
  };

  const onSubmitLogin = () => {
    requestLogin('hoang-viet.nguyen@ant-tech.eu', '12345678');

    // if (!isValidEmail(username)) {
    //   logMessage('Invalid email');
    // } else {
    //   if (!isValidPassword(password)) {
    //     logMessage('Invalid password');
    //   } else {
    //     requestLogin(username.toLowerCase(), password);
    setIsLoginEmail(true);
    //   }
    // }
  };

  return (
    <ScrollView
      style={styles.viewOnScreen}
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <View style={styles.body}>
        <DRSHeader
          headerTitle={'LOGIN'}
          contentTitle={'Every thing around you'}
        />
        <DRSImage
          resizeMode={'contain'}
          imageStyles={styles.image}
          source={Images.background1}
        />
        <View>
          <RDSTextInputWithTitle
            onSubmitEditing={() => {
              passwordRef.current.focus();
            }}
            value={username}
            onChangeText={setUsername}
            textInputTitle={'Email'}
            placeholder={'Email'}
            returnKeyType="next"
            textInputTitle={styles.distanceInput}
          />
          <RDSTextInputWithTitle
            onSubmitEditing={onSubmitLogin}
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
            textInputTitle={'Password'}
            placeholder={'Password'}
            secureTextEntry={true}
            returnKeyType="done"
            textInputTitle={styles.distanceInput}
          />
        </View>
        <DRSMenuButton
          title={'Submit login'}
          onPress={onSubmitLogin}
          imageSource={Images.tick}
          style={styles.submitBtn}
        />
      </View>
      {fetchingLoginEmail && <DRSLoading />}
    </ScrollView>
  );
}

export default LoginScreen;
