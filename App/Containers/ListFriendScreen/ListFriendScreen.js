import React, {useEffect} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';

// styles
import styles from './styles/ListFriendScreenStyles';

// redux
import {useSelector, useDispatch} from 'react-redux';
import UserActions from '../../Redux/UserRedux'

// components
import {DRSFriendCard, DRSLoading} from '../../Components';

// function
import {usePrevious} from '../../Functions/AppFunction';

function ListFriendScreen() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const friendList = userState.userFriendList.results
  const fetchingGetListFriend = userState.fetchingGetListFriend
  const errorGetListFriend = userState.errorGetListFriend
  const prevFetchingGetListFriend = usePrevious(fetchingGetListFriend)

  useEffect(() => {
    dispatch(UserActions.getListFriendRequest())
  },[])

  useEffect(() => {
    if (prevFetchingGetListFriend && fetchingGetListFriend) {
      if(!errorGetListFriend) {
        return
      } else {
        Alert.alert('Message', errorGetListFriend)
      }
    }
  },[fetchingGetListFriend])

  const renderItem = ({item}) => {
    return <DRSFriendCard item={item}/>;
  };

  return (
    <View style={styles.viewOnScreen}>
      {friendList ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={friendList}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <View>
          <Text style={styles.emptyText}>User don't have any friend</Text>
        </View>
      )}
      {fetchingGetListFriend && <DRSLoading />}
    </View>
  );
}

export default ListFriendScreen;
