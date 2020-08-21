import React from 'react';
import { View, Image } from 'react-native'

// style
import styles from './Styles/DRSMultiplePhotoStyle'

// theme
import { Images } from '../../../Themes'

// components
import { DRSImageButton } from '../../../Components'

function DRSMultiplePhoto({
    containerStyle, 
    imagesStyle, 
    sourceImage1, 
    sourceImage2, 
    sourceImage3, 
    btnOnPressAble,
    onPressBtn1,
    onPressBtn2,
    onPressBtn3
}) {
  return (
    <View style={[styles.listImageWrapper, containerStyle]}>
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
        sourceImage={sourceImage2 ? sourceImage2 : Images.defaultPhoto}
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
  );
}

export default DRSMultiplePhoto;
