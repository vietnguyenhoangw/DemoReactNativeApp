import * as React from 'react';
import {View, FlatList} from 'react-native';

// style
import styles from './Styles/DRSFlatlistStyle';

// component
import {DRSPostCard} from '../index';

function DRSFlatlist({listData, renderHeader, onRefresh}) {
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
            onRefresh={() => onRefresh()}
            refreshing={false}
          />
        </View>
      ) : (
        <View>{renderHeader && renderHeader()}</View>
      )}
    </View>
  );
}

export default DRSFlatlist;
