import React from 'react';
import {TouchableOpacity, Text, View, Modal, Image} from 'react-native';

// styles
import styles from './styles/DRSMenuButtonStyle';

// components
import { DRSImage } from '../../DRSImage'

function DRSMenuButton({onPress, title, imageSource, style}) {
  return (
    <TouchableOpacity style={[styles.menuButton, style]} onPress={onPress}>
      <View style={styles.commonBtn}>
        <DRSImage source={imageSource} imageStyles={styles.commonIcon} />
      </View>
      <Text style={styles.textItemMenu}>{title}</Text>
    </TouchableOpacity>
  )
}

export default DRSMenuButton;
