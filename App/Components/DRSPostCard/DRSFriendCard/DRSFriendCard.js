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

function DRSFriendCard({imageSource, item}) {
  const {url, totalComments, totalLikes, createdAt} = item;
  const {fullName, avatarUrl} = item.uploadedBy;

  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DRSFriendCard;
