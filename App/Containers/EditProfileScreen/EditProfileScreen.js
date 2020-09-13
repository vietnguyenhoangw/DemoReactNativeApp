import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// styles
import styles from './styles/EditProfileScreenStyles';

// components
import {DRSMultiplePhoto, DRSImageButton} from '../../Components/index';

// redux
import {useSelector, useDispatch} from 'react-redux';

function EditProfileScreen() {
  const userState = useSelector((state) => state.auth);
  const userData = userState.userData.user;
  const featuredPhotos = userData.featuredPhotos;

  let newImageUrlList = [];
  featuredPhotos.filter((item) => {
    newImageUrlList.push(item.url);
  });

  return (
    <View>
      <DRSMultiplePhoto
        containerStyle={styles.multiplePhotoContainer}
        btnOnPressAble={false}
        sourceImage1={newImageUrlList[0]}
        sourceImage2={newImageUrlList[1]}
        sourceImage3={newImageUrlList[2]}
      />
      <TouchableOpacity style={styles.btnFeaturedPhotos}>
          <Text style={styles.textBtnFeaturedPhotos}>Change featured photos</Text>
      </TouchableOpacity>
    </View>
  );
}

export default EditProfileScreen;
