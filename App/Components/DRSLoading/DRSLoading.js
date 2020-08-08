import React from 'react';
import {ActivityIndicator, Text, View, Modal} from 'react-native';

// import styles
import styles from './Styles/DRSLoadingStyle';

function DRSLoading() {
  return (
    <View style={styles.container}>
      <View style={styles.loadingWrapper}>
        <ActivityIndicator animating={true} size={'large'} />
      </View>
    </View>
  )
}

export default DRSLoading;
