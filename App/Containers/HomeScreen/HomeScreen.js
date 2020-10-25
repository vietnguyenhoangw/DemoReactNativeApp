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
    const permisionText =
      'Too many post near your location, we need to determine your location.\n\nPlease turn on location services in your phone settings.';
    return (
      <TouchableOpacity style={styles.permisionBtn} onPress={openAppSettings}>
        <Text style={styles.permisionText}>{permisionText}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (location) {
      dispatch(PostAction.getPostRequest(location));
    }
  }, []);

  return (
    <View style={styles.container}>
      <DRSHeader headerTitle={'Post around you'} contentTitle={'Discover new posts around you'}/>
      <View style={styles.viewOnScreen}>
        {!isAllowLocation ? (
          isNotAllowLocation()
        ) : Boolean(post) || errorOtherPost ? (
          <Text style={styles.permisionText}>
            {'Do not have any post around you !'}
          </Text>
        ) : (
          <DRSFlatlist listData={post} />
        )}
        {fetchingGetOtherPost && <DRSLoading />}
      </View>
    </View>
  );
}

export default HomeScreen;
