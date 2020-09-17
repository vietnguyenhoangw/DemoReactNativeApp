import React, {FC, forwardRef, Ref, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import ImageView from 'react-native-image-viewing';

// Styles
import styles from './styles/DRSViewImageStyles';

// image
import {Images} from '../../Themes';

// components
import {DRSImage} from '../DRSImage';

function DRSViewImage({imageSource}) {
  const [isViewImage, setIsViewImage] = useState(false);

  const images = [
    {
      uri: imageSource
    },
  ];

  console.log(imageSource);

  const onPressViewImage = () => {
    setIsViewImage(true);
  };

  const onPressCloseImage = () => {
    setIsViewImage(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressViewImage}>
        <DRSImage imageStyles={styles.post} source={imageSource} />
      </TouchableOpacity>
      <ImageView
        images={images}
        imageIndex={0}
        visible={isViewImage}
        onRequestClose={onPressCloseImage}
        swipeToCloseEnabled={false}
      />
    </View>
  );
}

export default DRSViewImage;
