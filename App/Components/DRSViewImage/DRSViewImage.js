import React, {FC, forwardRef, Ref, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import ImageView from 'react-native-image-viewing';

// Styles
import styles from './styles/DRSViewImageStyles';

// image
import {Images} from '../../Themes';

// components
import {DRSImage} from '../DRSImage';

function DRSViewImage({
  imageSource,
  containerStyles,
  imageStyles,
  imageList,
  imageIndex,
}) {
  const [isViewImage, setIsViewImage] = useState(false);

  const images = [
    {
      uri: imageSource,
    },
  ];

  const onPressViewImage = () => {
    setIsViewImage(true);
  };

  const onPressCloseImage = () => {
    setIsViewImage(false);
  };

  return (
    <View style={containerStyles}>
      {imageSource ? (
        <TouchableOpacity onPress={onPressViewImage}>
          <DRSImage imageStyles={imageStyles} source={imageSource} />
        </TouchableOpacity>
      ) : (
        <View>
          <DRSImage imageStyles={imageStyles} source={Images.defaultPhoto} />
        </View>
      )}
      <ImageView
        images={imageList ? imageList : images}
        imageIndex={imageIndex ? imageIndex : 0}
        visible={isViewImage}
        onRequestClose={onPressCloseImage}
        swipeToCloseEnabled={false}
      />
    </View>
  );
}

export default DRSViewImage;
