import React from 'react';
import {ActivityIndicator, View} from 'react-native';

// styles
import styles from './Styles/DRSLoadingStyle';

// theme
import {Colors} from '../../Themes';

function DRSLoading() {
  return (
    <View style={styles.container}>
      <View style={styles.loadingWrapper}>
        <ActivityIndicator
          animating={true}
          size={'large'}
          color={Colors.black}
        />
      </View>
    </View>
  );
}

export default DRSLoading;
