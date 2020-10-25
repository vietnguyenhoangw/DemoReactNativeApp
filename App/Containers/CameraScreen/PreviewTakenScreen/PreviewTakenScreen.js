import React from 'react';
import {View, TouchableOpacity} from 'react-native';

// styles
import styles from './Styles/PreviewTakenScreenStyle';

// theme
import {Images} from '../../../Themes';

// components
import {DRSImage} from '../../../Components';

function PreviewTakenScreen({navigation, route}) {
  const {imageUrl} = route.params;
  console.log("PreviewTakenScreen -> imageUrl", imageUrl)

  const onReSnap = () => {
      navigation.goBack();
  };

  const onConfirmImage = () => {
  };

  return (
    <View style={styles.previewHeaderContainer}>
      <View style={styles.previewHeader}>
        <TouchableOpacity style={styles.snapBtnFeature} onPress={onReSnap}>
          <DRSImage
            imageStyles={styles.imgBtnFeature}
            source={Images.cancel_black}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.snapBtnFeature}
          onPress={onConfirmImage}>
          <DRSImage
            imageStyles={styles.imgBtnFeature}
            source={Images.tick}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <DRSImage imageStyles={{flex: 1}} source={imageUrl} />
    </View>
  );
}

export default PreviewTakenScreen;
