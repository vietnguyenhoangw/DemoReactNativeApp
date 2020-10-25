import React from 'react';
import {TouchableOpacity, Text, View, Modal, Image} from 'react-native';

// styles
import styles from './styles/DRSMenuButtonStyle';

// components
import {DRSImage} from '../../DRSImage';

function DRSMenuButton({
  onPress,
  title,
  imageSource,
  style,
  titleStyle,
  commonIcon,
  commonBtn
}) {
  return (
    <TouchableOpacity style={[styles.menuButton, style]} onPress={onPress}>
      <View style={[styles.commonBtn, commonBtn]}>
        <DRSImage
          resizeMode={'contain'}
          source={imageSource}
          imageStyles={[styles.commonIcon, commonIcon]}
        />
      </View>
      <Text style={[styles.textItemMenu, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default DRSMenuButton;
