import React, {useState, useEffect, useRef} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

// style
import styles from './Styles/DRSPostCardStyle';

// components
import {DRSImage, DRSImageButton, DRSViewImage} from '../../Components';

// theme
import {Metrics, Images} from '../../Themes';

// redux
import {useSelector, useDispatch} from 'react-redux';

function DRSPostCard({imageSource, item}) {
  const {url, totalComments, totalLikes, createdAt} = item;
  const {fullName, avatarUrl} = item.uploadedBy;
  console.log('DRSPostCard -> item', item);

  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.header}>
          <DRSImage
            resizeMode={'cover'}
            imageStyles={styles.avatar}
            source={avatarUrl}
          />
          <View style={styles.nameContain}>
            <Text style={styles.userNameText}>{fullName}</Text>
            <Text style={styles.dateText}>{createdAt}</Text>
          </View>
          <DRSImageButton sourceImage={Images.subMenu} />
        </View>
        <DRSViewImage imageSource={url} />
        <View style={styles.header}>
          <Text style={styles.dateText}>{totalLikes} likes |</Text>
          <Text style={styles.dateText}> {totalComments} comments</Text>
        </View>
        <View style={styles.bottom}>
          <DRSImageButton
            imagesStyle={styles.btnBottom}
            btnContainer={styles.btnBottomContainer}
            sourceImage={Images.tick}
          />
          <DRSImageButton
            imagesStyle={styles.btnBottom}
            btnContainer={styles.btnBottomContainer}
            sourceImage={Images.chat}
          />
          <DRSImageButton
            imagesStyle={styles.btnBottom}
            btnContainer={styles.btnBottomContainer}
            sourceImage={Images.share}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default DRSPostCard;
