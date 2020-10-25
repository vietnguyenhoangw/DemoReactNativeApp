import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {RNCamera} from 'react-native-camera';

// redux
import {useSelector, useDispatch} from 'react-redux';

// styles
import styles from './Styles/CameraScreenStyles';

//components
import {DRSImage, DRSHeader} from '../../Components';

// theme
import {Images} from '../../Themes';

function PostingScreen({navigation}) {
  const refCamera = useRef(null);
  const [isRotateCamera, setIsRotateCamera] = useState(true);
  const [isFlashOn, setIsFlashOn] = useState(false);

  const takePicture = async () => {
    if (refCamera && refCamera.current !== null) {
      const options = {quality: 0.5, base64: true};
      const data = await refCamera.current.takePictureAsync(options);
      navigation.navigate('PreviewTakenScreen', {imageUrl: data.uri});
    }
  };

  const onDetectPress = async () => {
    // create this method for future
    // camera mode video and picture
    await takePicture();
  };

  const onFlash = () => {
    setIsFlashOn(!isFlashOn);
  };

  const onRotateCamera = () => {
    setIsRotateCamera(!isRotateCamera);
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
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
        <View>
          <DRSHeader
            imageStyle={styles.headerIcon}
            leftOnPress={onBack}
            contentTitleStyles={styles.headerText}
            textHeaderStyles={styles.headerText}
            contentTitle={'Create a post to your friend'}
            headerTitle={'Camera'}
          />
        </View>
        <View style={styles.bottomBar}>
          {isRotateCamera ? (
            <TouchableOpacity onPress={onFlash} style={styles.snapBtnFeature}>
              <DRSImage
                imageStyles={styles.imgBtnFeature}
                source={isFlashOn ? Images.flash : Images.flashoff}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.snapBtnFeature} />
          )}

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
    </View>
  );
}

export default PostingScreen;
