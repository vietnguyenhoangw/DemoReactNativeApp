import * as React from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';

// style
import styles from './Styles/DRSFlatlistStyle';

// component
import {DRSPostCard} from '../index';

function DRSFlatlist({listData, renderHeader}) {
  const processRenderHeader = () => {
    if (renderHeader) {
      return renderHeader();
    }
    return null;
  };

  const renderItem = ({item}) => {
    return <DRSPostCard item={item} />;
  };

  return (
    <View style={[styles.container]}>
      {listData ? (
        <View>
          <FlatList
            ListHeaderComponent={processRenderHeader}
            showsVerticalScrollIndicator={false}
            data={listData}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      ) : (
        <View>
          {renderHeader()}
          <Text style={styles.emptyText}>User don't have any post</Text>
        </View>
      )}
    </View>
  );
}

export default DRSFlatlist;
