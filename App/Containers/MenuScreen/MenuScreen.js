import React, {useState, useEffect, useRef} from 'react';
import {View, Alert, Text, TouchableOpacity} from 'react-native';

// styles
import styles from './styles/MenuScreenStyles'

// themes
import { Images } from '../../Themes'

// components
import { DRSMenuButton, DRSImage } from '../../Components/index'

// redux
import {useSelector, useDispatch} from 'react-redux';
import AuthActions from '../../Redux/AuthRedux'
import { color } from 'react-native-reanimated';



function MenuScreen({ navigation }) {
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.user)
  const userData = userState.userData.user
  const token = userState.userData.token
  const { fetchingLogout, errorLogout } = userState;
  const [isLogout, setIsLogout] = useState(false);

  useEffect(() => {
    if (isLogout && !fetchingLogout) {
      console.log('errorLogout: ', errorLogout)
      if (!!errorLogout) {
        Alert.alert('Error')
        setIsLogout(false)
      } else {
        navigation.reset({
          index: 0,
          routes: [{
            name: 'AuthStack'
          }]
        })
        setIsLogout(false)
      }
    }
  }, [fetchingLogout])

  const onLogout = () => {
    dispatch(AuthActions.logoutRequest(token))
    setIsLogout(true)
  }

  const onConfirmLogout = () => {
    const message = 'Log out?'
    Alert.alert(
      message,
      null,
      [{text: 'Log out', onPress: onLogout}, {text: 'Cancel'}],
      {cancelable: true},
    );
  }

  const onPressProfile = () => {
    navigation.navigate('ProfileScreen')
  }

  return (
    <View style={styles.viewOnScreen}>
      <TouchableOpacity style={styles.profileContainer} onPress={onPressProfile}>
        <DRSImage resizeMode={'contain'} source={userData.avatarUrl} imageStyles={styles.avatarImage} />
        <View>
          <Text style={styles.nameText}>{userData.fullName}</Text>
          <Text style={styles.descriptionNameText}>Click to see more your profile !</Text>
        </View>
      </TouchableOpacity>
      <View>
        <DRSMenuButton title={'My Message'} imageSource={Images.message} />
        <DRSMenuButton title={'Blocked people'} imageSource={Images.block} />
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
