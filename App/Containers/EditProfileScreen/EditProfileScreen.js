import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// styles
import styles from './styles/EditProfileScreenStyles';

// components
import {RDSTextInputWithTitle} from '../../Components/index';

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
      <RDSTextInputWithTitle
        textInputTitle={{marginHorizontal: 8, paddingHorizontal: 8}}
        miniTitle={'First Name'}
        placeholder={'First Name'}
      />
      <RDSTextInputWithTitle
        textInputTitle={{marginHorizontal: 8, paddingHorizontal: 8}}
        miniTitle={'Last Name'}
        placeholder={'Last Name'}
      />
      <RDSTextInputWithTitle
        textInputTitle={{marginHorizontal: 8, paddingHorizontal: 8}}
        miniTitle={'Descriptions'}
        placeholder={'Descriptions'}
      />
      <RDSTextInputWithTitle
        textInputTitle={{marginHorizontal: 8, paddingHorizontal: 8}}
        miniTitle={'Address'}
        placeholder={'Address'}
      />
    </View>
  );
}

export default EditProfileScreen;
