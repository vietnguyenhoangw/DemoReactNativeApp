import * as React from 'react'
import { View, Text, FlatList, RefreshControl } from 'react-native'

// style
import styles from './Styles/DRSFlatlistStyle'

function DRSFlatlist({listData, renderHeader}) {
    const processRenderHeader = () => {
        if (renderHeader) {
            return renderHeader()
        }
        return null
    }

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <View style={[styles.container]}>
            {listData ? (
                <View>
                    <FlatList
                        ListHeaderComponent={processRenderHeader}
                        showsVerticalScrollIndicator={false}
                        data={listData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            ) : (
                    <View>
                        <Text style={styles.emptyText}>User don't have any post</Text>
                    </View>
                )}
        </View>
    )
}

export default DRSFlatlist