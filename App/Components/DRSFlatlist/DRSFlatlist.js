import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';

// style
import styles from './Styles/DRSFlatlistStyle';

// component
import {DRSPostCard} from '../index';

const ItemHeight = 460;

function DRSFlatlist({listData, renderHeader, onRefresh}) {
  const processRenderHeader = () => {
    if (renderHeader) {
      return renderHeader();
    }
    return null;
  };

  const renderItem = useCallback(({item}) => <DRSPostCard item={item} />, []);

  const keyExtractor = useCallback((item) => item._id.toString(), []);

  const getItemLayout = (data, index) => ({
    length: ItemHeight,
    offset: ItemHeight * index,
    index,
  });

  return (
    <View style={[styles.container]}>
      {listData ? (
        <View>
          <FlatList
            initialNumToRender={3}
            ListHeaderComponent={processRenderHeader}
            showsVerticalScrollIndicator={false}
            data={listData}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            onRefresh={() => onRefresh()}
            refreshing={false}
            getItemLayout={getItemLayout}
          />
        </View>
      ) : (
        <View>{renderHeader && renderHeader()}</View>
      )}
    </View>
  );
}

export default DRSFlatlist;
