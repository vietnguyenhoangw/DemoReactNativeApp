import React, {useState, useEffect, useRef} from 'react';
import {View, Alert, Text, TouchableOpacity} from 'react-native';
import Toast from 'react-native-simple-toast';

// styles
import styles from './styles/MenuScreenStyles';

// themes
import {Images} from '../../Themes';

// components
import {DRSMenuButton, DRSImage, DRSHeader} from '../../Components/index';

// redux
import {useSelector, useDispatch} from 'react-redux';
import AuthActions from '../../Redux/AuthRedux';
import {color} from 'react-native-reanimated';

// function
import {checkPermissionLocation} from '../../Functions/PermissionFunction';

function MenuScreen({navigation}) {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.auth);
  const userData = userState.userData.user;
  console.log('MenuScreen -> userData', userData.avatarUrl);
  const token = userState.userData.token;
  const {fetchingLogout, errorLogout} = userState;
  const [isLogout, setIsLogout] = useState(false);

  useEffect(() => {
    if (isLogout && !fetchingLogout) {
      if (!!errorLogout) {
        Alert.alert('Error');
        setIsLogout(false);
      } else {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'AuthStack',
            },
          ],
        });
        setIsLogout(false);
      }
    }
  }, [fetchingLogout]);

  const onLogout = () => {
    dispatch(AuthActions.logoutRequest(token));
    setIsLogout(true);
  };

  const onConfirmLogout = () => {
    const message = 'Log out?';
    Alert.alert(
      message,
      null,
      [{text: 'Log out', onPress: onLogout}, {text: 'Cancel'}],
      {cancelable: true},
    );
  };

  const onPressProfile = () => {
    navigation.navigate('ProfileScreen');
  };

  const onEditProfile = () => {
    navigation.navigate('EditProfileScreen');
  };

  return (
    <View style={styles.viewOnScreen}>
      <DRSHeader
        onTitlePress={onPressProfile}
        imagePress={onPressProfile}
        contentTitle={'Hello'}
        headerTitle={userData.fullName}
        imageSource={userData.avatarUrl}
      />
      <View>
        <DRSMenuButton
          title={'Edit profile'}
          imageSource={Images.edit}
          onPress={onEditProfile}
        />
        <DRSMenuButton
          title={'My Message'}
          imageSource={Images.message}
          onPress={() => {Toast.show('Message is coming soon', Toast.SHORT);}}
        />
        <DRSMenuButton
          title={'Blocked people'}
          imageSource={Images.block}
          onPress={() => {Toast.show('Blocked people is coming soon', Toast.SHORT);}}
        />
        <DRSMenuButton
          title={'Log out'}
          imageSource={Images.disconnect}
          onPress={onConfirmLogout}
        />
      </View>
    </View>
  );
}

export default MenuScreen;
