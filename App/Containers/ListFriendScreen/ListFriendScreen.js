import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Alert, ScrollView, FlatList} from 'react-native';

// styles
import styles from './styles/ListFriendScreenStyles';

// redux
import {useSelector, useDispatch} from 'react-redux';

// components
import {DRSFriendCard, DRSPostCard} from '../../Components';

// fake data
import fakeData from '../../Configs/fakeData';

const fakeDataa = fakeData
function ListFriendScreen() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const userPost = userState.userPost.results;
  const [data, setData] = useState(fakeData)
  console.log("ListFriendScreen -> data", data)

  const renderItem = ({item}) => {
    return <DRSFriendCard item={item}/>;
  };

  return (
    <View style={styles.viewOnScreen}>
      {!fakeData ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={userPost}
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
