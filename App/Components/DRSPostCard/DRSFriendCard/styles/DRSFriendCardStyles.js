import React from 'react';
import {StyleSheet} from 'react-native';

// theme
import {Metrics, Colors} from '../../../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    width: Metrics.screenWidth - 20,
    padding: Metrics.baseMargin,
    borderRadius: 100,
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation:2,
  },
  imageStyle: {
    height: Metrics.tabBarHeight,
    width: Metrics.tabBarHeight,
    borderRadius: 100,
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
  }
});
