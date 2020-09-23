import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// style
import styles from './Styles/DRSPostCardStyle';

// components
import {DRSImageButton, DRSViewImage} from '../../Components';

// theme
import {Images} from '../../Themes';

function DRSPostCard({imageSource, item}) {
  const {url, totalComments, totalLikes, createdAt, description} = item;
  const {fullName, avatarUrl} = item.uploadedBy;

  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.header}>
          <DRSViewImage imageSource={avatarUrl} imageStyles={styles.avatar} />
          <View style={styles.nameContain}>
            <Text style={styles.userNameText}>{fullName}</Text>
            <Text style={styles.dateText}>{createdAt}</Text>
          </View>
          <DRSImageButton sourceImage={Images.subMenu} />
        </View>
        <View style={styles.description}>
          <Text>{description}</Text>
        </View>
        <DRSViewImage imageSource={url} imageStyles={styles.post} />
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
