import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

// redux
import {useSelector, useDispatch} from 'react-redux';
import UserActions from '../../Redux/UserRedux';
import PostActions from '../../Redux/PostRedux';

// styles
import styles from './Styles/OtherProfileScreenStyles';

//components
import {
  DRSMultiplePhoto,
  DRSFlatlist,
  DRSImage,
  DRSViewImage,
  DRSLoading,
} from '../../Components';

function OtherProfileScreen({route}) {
  const {cardItem} = route.params;
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const userData = cardItem;
  const featuredPhotos = userState.userByIdData?.featuredPhotos;
  const userPost = userState.postByUserId;
  const fetchingGetUserByIdRequest = userState.fetchingGetUserById;
  const fetchingGetPostByUserIdRequest = userState.fetchingGetPostByUserId;

  let newImageUrlList = [];
  featuredPhotos && featuredPhotos.filter((item) => {
    newImageUrlList.push({uri: item.url});
  });

  useEffect(() => {
    if (cardItem) {
      dispatch(UserActions.getUserByIdRequest(cardItem._id));
      dispatch(UserActions.getPostByUserIdRequest(cardItem._id));
    }
  }, []);

  const renderHeader = () => {
    return (
      <View>
        <View>
          <DRSImage
            imageStyles={styles.coverPhoto}
            source={userData.coverUrl}
          />
        </View>
        <View style={styles.containerAvatarPhoto}>
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
      {fetchingGetUserByIdRequest ||
        (fetchingGetPostByUserIdRequest && <DRSLoading />)}
    </View>
  );
}

export default OtherProfileScreen;
