import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

// Styles
import styles from './Styles/DRSTabBarStyle'
import { Images, Colors } from '../../Themes'

function DRSTabBar({ state, navigation }, ref) {
    const { index } = state

    const onPressHomeTab = () => {
        if (index !== 0) {
            navigation.navigate('HomeScreen')
        }
    }

    const onPressSettingTab = () => {
        if (index !== 1) {
            navigation.navigate('MenuScreen')
        }
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.tabButton} onPress={onPressHomeTab}>
          <Image
            source={Images.earth}
            style={[
              styles.iconButton,
              {
                tintColor: index === 0 ? Colors.nightRider : Colors.veryLightGrey
              }
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={onPressSettingTab}>
          <Image
            source={Images.subMenu}
            style={{
              tintColor: index === 1 ? Colors.nightRider : Colors.veryLightGrey
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  
  const forwardInput = React.forwardRef(DRSTabBar);
  export default forwardInput;