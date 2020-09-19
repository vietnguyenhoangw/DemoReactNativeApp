import React from 'react';
import {StyleSheet} from 'react-native';

// theme
import {Metrics, Colors} from '../../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.greyLight,
    flexDirection: 'row',
    width: Metrics.screenWidth - 20,
    padding: Metrics.baseMargin
  },
  imageStyle: {
    height: Metrics.tabBarHeight,
    width: Metrics.tabBarHeight,
    borderWidth: 1
  },
  nameText:{
    fontSize: Metrics.doubleBaseMargin,
    fontWeight: 'bold'
  },
  textContainer: {
    flex: 1,
    marginHorizontal: Metrics.baseMargin,
    justifyContent: 'center'
  },
  descriptionText: {

  },
  menuIcon: {
    flex: 1
  }
});
