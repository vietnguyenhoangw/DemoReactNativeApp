import React from 'react';
import {View, Text} from 'react-native';
import * as Progress from 'react-native-progress';

// styles
import styles from './Styles/DRSLoadingBarStyle';

// theme
import {Metrics, Colors} from '../../../Themes';

function DRSLoadingBar({processValue}) {
  return (
    <View style={styles.container}>
      <Text style={styles.uploadText}>
        {processValue !== 1 ? 'Upload process ...' : 'Upload done'}
      </Text>
      <Progress.Bar
        progress={processValue}
        width={Metrics.screenWidth}
        color={'red'}
      />
    </View>
  );
}

export default DRSLoadingBar;
