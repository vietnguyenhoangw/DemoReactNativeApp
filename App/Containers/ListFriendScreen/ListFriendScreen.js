import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Alert, ScrollView, FlatList} from 'react-native';

// styles
import styles from './styles/ListFriendScreenStyles';

// redux
import {useSelector, useDispatch} from 'react-redux';
import UserActions from '../../Redux/UserRedux'

// components
import {DRSFriendCard, DRSPostCard} from '../../Components';

// fake data
import fakeData from '../../Configs/fakeData';

const fakeDataa = fakeData
function ListFriendScreen() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const friendList = userState.userFriendList.results
  console.log("ListFriendScreen -> friendList", friendList)

  useEffect(() => {
    dispatch(UserActions.getListFriendRequest())
  },[])

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
    </View>
  );
}

export default ListFriendScreen;
