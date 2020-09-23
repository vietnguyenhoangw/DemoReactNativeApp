import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// redux
import {useSelector, useDispatch} from 'react-redux';
import UserActions from '../../Redux/UserRedux';

// styles
import styles from './Styles/ProfileScreenStyles';

//components
import {
  DRSMultiplePhoto,
  DRSFlatlist,
  DRSImage,
  DRSViewImage,
  DRSLoading,
} from '../../Components';

// theme
import {Images} from '../../Themes';

// function
import {imagePicker} from '../../Functions/ImageFunction';

function ProfileScreen() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const userState = useSelector((state) => state.user);
  const userData = authState.userData.user;
  console.log('ProfileScreen -> userData', userData);
  const fetchingGetUserPost = userState.fetchingGetUserPost;
  const featuredPhotos = userData.featuredPhotos;
  const userPost = userState.userPost.results;

  let newImageUrlList = [];
  featuredPhotos.filter((item) => {
    newImageUrlList.push({uri: item.url});
  });

  useEffect(() => {
    dispatch(UserActions.getUserPostRequest());
  }, []);

  const onPressChangeCoverPhoto = () => {
    imagePicker()
  };

  const onPressChangeAvatarPhoto = () => {
    console.log('avatar');
  };

  const renderHeader = () => {
    return (
      <View>
        <View>
          <View style={styles.cameraCoverContainer}>
            <TouchableOpacity onPress={onPressChangeCoverPhoto}>
              <DRSImage
                source={Images.camera}
                imageStyles={styles.cameraIcon}
              />
            </TouchableOpacity>
          </View>
          <DRSImage
            imageStyles={styles.coverPhoto}
            source={userData.coverUrl}
          />
        </View>
        <View style={styles.containerAvatarPhoto}>
          <TouchableOpacity
            style={styles.cameraContainer}
            onPress={onPressChangeAvatarPhoto}>
            <DRSImage source={Images.camera} imageStyles={styles.cameraIcon} />
          </TouchableOpacity>
          <DRSViewImage
            imageSource={userData.avatarUrl}
            imageStyles={styles.avatarPhoto}
          />
        </View>
        <View style={styles.nameContaint}>
          <Text style={styles.nameText}>{userData.fullName}</Text>
        </View>
        <View style={styles.descriptions}>
          <Text style={styles.descriptionsText}>
            {userData.bio ? userData.bio : '. . .'}
          </Text>
          <Text style={styles.descriptionsText}>
            {userData.dob ? userData.dob : '. . .'}
          </Text>
          {userData.city && (
            <Text style={styles.descriptionsText}>{userData.city}</Text>
          )}
        </View>
        <DRSMultiplePhoto
          containerStyle={styles.multiplePhotoContainer}
          btnOnPressAble={false}
          sourceImage1={newImageUrlList[0]}
          sourceImage2={newImageUrlList[1]}
          sourceImage3={newImageUrlList[2]}
          viewType={true}
          imageList={newImageUrlList}
        />
      </View>
    );
  };

  return (
    <View style={styles.viewOnScreen}>
      <DRSFlatlist renderHeader={renderHeader} listData={userPost} />
    </View>
  );
}

export default ProfileScreen;
