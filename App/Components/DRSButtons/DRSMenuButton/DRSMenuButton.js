import React from 'react';
import {TouchableOpacity, Text, View, Modal, Image} from 'react-native';

// import styles
import styles from './styles/DRSMenuButtonStyle';

function DRSMenuButton({onPress, title, imageSource, style}) {
  return (
    <TouchableOpacity style={[styles.menuButton, style]} onPress={onPress}>
      <View style={styles.commonBtn}>
        <Image source={imageSource} imageStyles={styles.commonIcon} />
      </View>
      <Text style={styles.textItemMenu}>{title}</Text>
    </TouchableOpacity>
  )
}

export default DRSMenuButton;
