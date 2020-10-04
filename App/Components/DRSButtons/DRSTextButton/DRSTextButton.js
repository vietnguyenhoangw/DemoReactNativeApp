import React from 'react';
import {TouchableOpacity, Text, View, Modal, Image} from 'react-native';

// styles
import styles from './styles/DRSTextButtonStyles';

// components
import { DRSImage } from '../../DRSImage'

function DRSTextButton({onPress, title, conatinerStyle}) {
  return (
    <TouchableOpacity style={[styles.menuButton, conatinerStyle]} onPress={onPress}>
      <Text style={styles.textItemMenu}>{title}</Text>
    </TouchableOpacity>
  )
}

export default DRSTextButton;
