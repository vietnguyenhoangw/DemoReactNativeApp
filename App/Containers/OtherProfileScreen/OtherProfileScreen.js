import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

// redux
import {useSelector, useDispatch} from 'react-redux';
import UserActions from '../../Redux/UserRedux';
import PostActions from '../../Redux/PostRedux';

// styles
import styles from './Styles/OtherProfileScreenStyles';

// theme
import {Metrics} from '../../Themes';

//components
import {
  DRSMultiplePhoto,
  DRSFlatlist,
  DRSViewImage,
  DRSLoading,
  DRSHeader,
} from '../../Components';

function OtherProfileScreen({navigation, route}) {
  const {cardItem} = route.params;
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const userData = cardItem;
  const featuredPhotos = userState.userByIdData?.featuredPhotos;
  const userPost = userState.postByUserId;
  const fetchingGetUserByIdRequest = userState.fetchingGetUserById;
  const fetchingGetPostByUserIdRequest = userState.fetchingGetPostByUserId;

  let newImageUrlList = [];
  featuredPhotos &&
    featuredPhotos.filter((item) => {
      newImageUrlList.push({uri: item.url});
    });

  useEffect(() => {
    if (cardItem) {
      dispatch(UserActions.getUserByIdRequest(cardItem._id));
      dispatch(UserActions.getPostByUserIdRequest(cardItem._id));
    }
  }, []);

  const onBack = () => {
    navigation.goBack();
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <DRSHeader headerTitle={userData.fullName} leftOnPress={onBack} />
        <View style={styles.containerAvatarPhoto}>
          <DRSViewImage
            imageSource={userData.avatarUrl}
            imageStyles={styles.avatarPhoto}
          />
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
          imagesStyle={{
            borderRadius: 100,
            width: Metrics.screenWidth / 4,
            height: Metrics.screenWidth / 4,
          }}
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
