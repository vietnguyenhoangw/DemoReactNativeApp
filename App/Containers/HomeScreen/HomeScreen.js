import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Alert, ScrollView} from 'react-native';

// component
import {DRSFlatlist, DRSLoading, DRSHeader} from '../../Components';

// styles
import styles from './Styles/HomeScreenStyles';

// redux
import {useSelector, useDispatch} from 'react-redux';
import PostAction from '../../Redux/PostRedux';
import {TouchableOpacity} from 'react-native-gesture-handler';

// function
import {openAppSettings} from '../../Functions/PermissionFunction';
import {isEmpty} from 'lodash';

function HomeScreen() {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.app);
  const postState = useSelector((state) => state.post);
  const isAllowLocation = appState.isAllowLocation;
  const location = appState.location;
  const post = postState.otherPost.results;
  const fetchingGetOtherPost = postState.fetchingGetOtherPost;
  const errorOtherPost = postState.errorOtherPost;

  const isNotAllowLocation = () => {
    const permissionText =
      'Too many post near your location, we need to determine your location.\n\nPlease turn on location services in your phone settings.';
    return (
      <TouchableOpacity style={styles.permissionBtn} onPress={openAppSettings}>
        <Text style={styles.permissionText}>{permissionText}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (location) {
      dispatch(PostAction.getPostRequest(location));
    }
  }, []);

  const onRefreshData = () => {
    dispatch(PostAction.getPostRequest(location));
  };

  const renderList = () => {
    if (!isAllowLocation) {
      isNotAllowLocation();
    } else {
      if (!isEmpty(post) && isEmpty(errorOtherPost)) {
        return <DRSFlatlist listData={post} onRefresh={onRefreshData} />;
      } else {
        return (
          <Text style={styles.permissionText}>
            {'Do not have any post around you !'}
          </Text>
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <DRSHeader
        headerTitle={'Post around you'}
        contentTitle={'Discover new posts around you'}
      />
      <View style={styles.viewOnScreen}>
        {renderList()}
        {fetchingGetOtherPost && <DRSLoading />}
      </View>
    </View>
  );
}

export default HomeScreen;
