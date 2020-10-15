import React, {useState, useEffect, useRef} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

// style
import styles from './styles/DRSFriendCardStyles';

// components
import {DRSImage, DRSImageButton, DRSViewImage} from '../../../Components';

// theme
import {Metrics, Images} from '../../../Themes';

// redux
import {useSelector, useDispatch} from 'react-redux';

function DRSFriendCard({imageSource, item, onPressItem}) {
  const {fullName, avatarUrl, job} = item;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPressItem(item)}>
      <DRSImage
        resizeMode={'cover'}
        source={avatarUrl}
        imageStyles={styles.imageStyle}
      />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{fullName}</Text>
        <Text style={styles.descriptionText}>{job}</Text>
      </View>
      <DRSImageButton imagesStyle={styles.menuIcon} sourceImage={Images.subMenu}/>
    </TouchableOpacity>
  );
}

export default DRSFriendCard;
