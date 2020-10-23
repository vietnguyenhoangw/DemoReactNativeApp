import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

// Styles
import styles from './Styles/DRSTabBarStyle';
import {Images, Colors} from '../../Themes';

function DRSTabBar({state, navigation}, ref) {
  const {index} = state;

  const onPressHomeTab = () => {
    if (index !== 0) {
      navigation.navigate('ListFriendScreen');
    }
  };

  const onPressFriendTab = () => {
    if (index !== 1) {
      navigation.navigate('HomeScreen');
    }
  };

  const onPressSettingTab = () => {
    if (index !== 2) {
      navigation.navigate('MenuScreen');
    }
  };

  const onPressPostingTab= () => {
    if (index !== 3) {
      navigation.navigate('CameraScreen');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tabButton} onPress={onPressHomeTab}>
        <Image
          source={Images.friends}
          style={[
            styles.iconButton,
            {
              tintColor: index === 0 ? Colors.nightRider : Colors.veryLightGrey,
            },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton} onPress={onPressPostingTab}>
        <Image
          source={Images.camera}
          style={[
            styles.iconButton,
            {
              tintColor: index === 3 ? Colors.nightRider : Colors.veryLightGrey,
            },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton} onPress={onPressFriendTab}>
        <Image
          source={Images.earth}
          style={[
            styles.iconButton,
            {
              tintColor: index === 1 ? Colors.nightRider : Colors.veryLightGrey,
            },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton} onPress={onPressSettingTab}>
        <Image
          source={Images.subMenu}
          style={{
            tintColor: index === 2 ? Colors.nightRider : Colors.veryLightGrey,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const forwardInput = React.forwardRef(DRSTabBar);
export default forwardInput;
