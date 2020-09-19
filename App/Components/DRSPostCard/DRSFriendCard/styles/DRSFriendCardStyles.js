import React from 'react';
import {StyleSheet} from 'react-native';

// theme
import {Metrics, Colors} from '../../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: Metrics.doubleBaseMargin,
    marginBottom: Metrics.baseMargin,
    backgroundColor: 'red',
    padding: 40
  }
});
