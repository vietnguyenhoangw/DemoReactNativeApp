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
} from '../../Components';

// fake-data
import {fakeData} from '../../Configs/fakeData';

function ProfileScreen() {
  const authState = useSelector((state) => state.auth);
  const userState = useSelector((state) => state.user);
  const userData = authState.userData.user;
  const dispatch = useDispatch();
  const featuredPhotos = userData.featuredPhotos;
  const userPost = userState.userPost.results;
  const [isViewImage, setIsViewImage] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  let newImageUrlList = [];
  featuredPhotos.filter((item) => {
    newImageUrlList.push({uri: item.url});
  });

  useEffect(() => {
    dispatch(UserActions.getUserPostRequest());
  }, []);

  const onPressViewImage = (index) => {
    setImageIndex(index)
    setIsViewImage(true)
  }

  const onPressCloseImage = () => {
    setIsViewImage(false)
  }

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
    </View>
  );
}

export default ProfileScreen;
