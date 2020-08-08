import React, {useState, useEffect, useRef} from 'react';
import {View, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// styles
import styles from './styles/MenuScreenStyles'

// themes
import { Images } from '../../Themes'

// components
import { DRSMenuButton } from '../../Components/index'

// redux
import AuthActions from '../../Redux/AuthRedux'

function MenuScreen({ navigation }) {
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.user)
  const token = userState.userData.token
  const { fetchingLogout, errorLogout } = userState;
  const [isLogout, setIsLogout] = useState(false);

  useEffect(() => {
    if (isLogout && !fetchingLogout) {
      if (!errorLogout) {
        navigation.reset({
          index: 0,
          routes: [{
            name: 'AuthStack'
          }]
        })
        setIsLogout(false)
      } else {
        Alert.alert('Error: ', errorSignOut)
      }
    }
  }, [fetchingLogout])

  const onLogout = () => {
    dispatch(AuthActions.logoutRequest(token))
    setIsLogout(true)
  }

  return (
    <View style={styles.viewOnScreen}>
      <DRSMenuButton title={'My Message'} imageSource={Images.message} />
      <DRSMenuButton title={'Blocked people'} imageSource={Images.block} />
      <DRSMenuButton
        title={'Log out'}
        imageSource={Images.disconnect}
        onPress={onLogout}
      />
    </View>
  );
}

export default MenuScreen;
