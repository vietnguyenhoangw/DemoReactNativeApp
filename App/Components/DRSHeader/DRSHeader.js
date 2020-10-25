import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// styles
import styles from './Styles/DRSHeaderStyles';

// components
import {DRSImage} from '../DRSImage';

// themes
import {Colors, Images} from '../../Themes';

function DRSHeader({
  imageStyle,
  leftOnPress,
  rightOnPress,
  headerTitle,
  contentTitle,
  imageSource,
  imagePress,
  onTitlePress,
  contentTitleStyles,
  textHeaderStyles
}) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonHeaderContainer}>
        {leftOnPress && (
          <TouchableOpacity
            onPress={leftOnPress && leftOnPress}
            style={styles.btnContainer}>
            <DRSImage
              resizeMode={'contain'}
              imageStyles={[styles.btnIcon, imageStyle]}
              source={Images.blackArrowBack}
            />
          </TouchableOpacity>
        )}
        {rightOnPress && (
          <TouchableOpacity onPress={rightOnPress} style={styles.btnContainer}>
            <DRSImage
              resizeMode={'contain'}
              imageStyles={[styles.btnIcon, imageStyle]}
              source={Images.subMenu}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.buttonHeaderContainer}>
        <View>
          {contentTitle && (
            <Text style={[styles.contentTitle, contentTitleStyles]}>{contentTitle}</Text>
          )}
          <TouchableOpacity onPress={onTitlePress && onTitlePress}>
            <Text style={[styles.textHeader, textHeaderStyles]}>{headerTitle}</Text>
          </TouchableOpacity>
        </View>
        {imageSource && (
          <TouchableOpacity onPress={imagePress} style={styles.imageHeader}>
            <DRSImage
              imageStyles={styles.image}
              source={imageSource}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default DRSHeader;
