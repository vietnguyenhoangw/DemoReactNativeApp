import React, {useState, useEffect, useRef} from 'react';
import {View, Text} from 'react-native';
import ImageView from 'react-native-image-viewing';

// redux
import {useSelector, useDispatch} from 'react-redux';
import AuthActions from '../../Redux/AuthRedux';
import UserActions from '../../Redux/UserRedux';
// import PostActions from '../../Redux/PostRedux'

// styles
import styles from './Styles/ProfileScreenStyles';

// theme
import {Images} from '../../Themes';

//components
import {
  DRSMultiplePhoto,
  DRSFlatlist,
  DRSImage,
  DRSViewImage,
  DRSLoading,
} from '../../Components';

function ProfileScreen() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const userState = useSelector((state) => state.user);
  const userData = authState.userData.user;
  const fetchingGetUserPost = userState.fetchingGetUserPost
  const featuredPhotos = userData.featuredPhotos;
  const userPost = userState.userPost.results;

  let newImageUrlList = [];
  featuredPhotos.filter((item) => {
    newImageUrlList.push({uri: item.url});
  });

  useEffect(() => {
    dispatch(UserActions.getUserPostRequest());
  }, []);

  const renderHeader = () => {
    return (
      <View>
        <DRSImage imageStyles={styles.coverPhoto} source={userData.coverUrl} />
        <DRSViewImage
          imageSource={userData.avatarUrl}
          containerStyles={styles.containerAvatarPhoto}
          imageStyles={styles.avatarPhoto}
        />
        <View style={styles.nameContaint}>
          <Text style={styles.nameText}>{userData.fullName}</Text>
        </View>
        <View style={styles.descriptions}>
          <Text style={styles.descriptionsText}>
            {userData.bio ? userData.bio : '. . .'}
          </Text>
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
      {fetchingGetUserPost && <DRSLoading />}
    </View>
  );
}

export default ProfileScreen;
