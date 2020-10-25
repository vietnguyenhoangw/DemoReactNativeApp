import React from 'react';
import {View, Image} from 'react-native';

// style
import styles from './Styles/DRSMultiplePhotoStyle';

// theme
import {Images} from '../../../Themes';

// components
import {DRSImageButton} from '../../../Components';
import {DRSViewImage} from '../../DRSViewImage';

function DRSMultiplePhoto({
  containerStyle,
  imagesStyle,
  sourceImage1,
  sourceImage2,
  sourceImage3,
  btnOnPressAble,
  onPressBtn1,
  onPressBtn2,
  onPressBtn3,
  imageList,
  viewType
}) {

  return (
    <View style={[containerStyle]}>
      {!viewType ? (
        <View style={[styles.listImageWrapper]}>
          <DRSImageButton
            btnContainer={styles.btnContainer}
            imagesStyle={[styles.image, imagesStyle]}
            sourceImage={sourceImage1 ? sourceImage1 : Images.defaultPhoto}
            btnOnPressAble={btnOnPressAble}
            onPressBtn={onPressBtn1}
            sourceIcon={Images.camera}
          />
          <DRSImageButton
            btnContainer={styles.btnContainer}
            imagesStyle={[styles.image, imagesStyle]}
            sourceImage={sourceImage2 ? sourceImage2  : Images.defaultPhoto}
            btnOnPressAble={btnOnPressAble}
            onPressBtn={onPressBtn2}
            sourceIcon={Images.camera}
          />
          <DRSImageButton
            btnContainer={styles.btnContainer}
            imagesStyle={[styles.image, imagesStyle]}
            sourceImage={sourceImage3 ? sourceImage3 : Images.defaultPhoto}
            btnOnPressAble={btnOnPressAble}
            onPressBtn={onPressBtn3}
            sourceIcon={Images.camera}
          />
        </View>
      ) : (
        <View style={[styles.listImageWrapper, containerStyle]}>
          <DRSViewImage
            imageSource={sourceImage1}
            imageStyles={[styles.image, imagesStyle]}
            containerStyles={styles.btnContainer}
            imageList={imageList}
            imageIndex={0}
          />
          <DRSViewImage
            imageSource={sourceImage2}
            imageStyles={[styles.image, imagesStyle]}
            containerStyles={styles.btnContainer}
            imageList={imageList}
            imageIndex={1}
          />
          <DRSViewImage
            imageSource={sourceImage3}
            imageStyles={[styles.image, imagesStyle]}
            containerStyles={styles.btnContainer}
            imageList={imageList}
            imageIndex={2}
          />
        </View>
      )}
    </View>
  );
}

export default DRSMultiplePhoto;
