import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {RNCamera} from 'react-native-camera';

// redux
import {useSelector, useDispatch} from 'react-redux';

// styles
import styles from './Styles/CameraScreenStyles';

//components
import {DRSImage} from '../../Components';

// theme
import {Images} from '../../Themes';

function PostingScreen({navigation}) {
  const refCamera = useRef(null);
  const [image, setImage] = useState(null);
  const [isSnap, setIsSnap] = useState(false);
  const [isRotateCamera, setIsRotateCamera] = useState(true);
  const [isFlashOn, setIsFlashOn] = useState(false);

  const takePicture = async () => {
    if (refCamera && refCamera.current !== null) {
      const options = {quality: 0.5, base64: true};
      const data = await refCamera.current.takePictureAsync(options);
      setImage(data.uri);
      setIsSnap(true);
    }
  };

  const onDetectPress = async () => {
    // create this method for future
    // camera mode video and picture
    await takePicture();
  };

  const onRotateCamera = () => {
    setIsRotateCamera(!isRotateCamera);
  };

  const onFlash = () => {
    setIsFlashOn(!isFlashOn);
  };

  const onReSnap = () => {
    setIsSnap(false);
    setImage(null);
  };

  const onConfirmImage = () => {
    navigation.navigate('PostingScreen', {
      imageUri: image,
    });
    onReSnap();
  };

  return (
    <View style={styles.container}>
      {isSnap && image ? (
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
          <DRSImage imageStyles={{flex: 1}} source={image} />
        </View>
      ) : (
        <RNCamera
          style={styles.camera}
          ref={refCamera}
          type={
            !isRotateCamera
              ? RNCamera.Constants.Type.front
              : RNCamera.Constants.Type.back
          }
          flashMode={
            isFlashOn
              ? RNCamera.Constants.FlashMode.on
              : RNCamera.Constants.FlashMode.off
          }
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          <View style={styles.bottomBar}>
            <TouchableOpacity onPress={onFlash} style={styles.snapBtnFeature}>
              <DRSImage
                imageStyles={styles.imgBtnFeature}
                source={isFlashOn ? Images.flash : Images.flashoff}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.snapBtn} onPress={onDetectPress}>
              <DRSImage
                imageStyles={styles.imgBtn}
                source={Images.camera}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.snapBtnFeature}
              onPress={onRotateCamera}>
              <DRSImage
                imageStyles={styles.imgBtnFeature}
                source={Images.rotate}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </RNCamera>
      )}
    </View>
  );
}

export default PostingScreen;
