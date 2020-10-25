import React from 'react';
import {StyleSheet} from 'react-native';

// theme
import {Metrics, Colors} from '../../../Themes';

export default StyleSheet.create({
  container: {
    padding: Metrics.doubleBaseMargin,
  },
  buttonHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnIcon: {
    width: 20, 
    height: 20, 
    tintColor: Colors.textColors
  },
  textHeader: {
    marginHorizontal: Metrics.baseMargin,
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.textColors,
  },
  contentTitle: {
    marginHorizontal: Metrics.baseMargin,
    marginTop: 10,
    fontSize: 25,
    color: Colors.textColors,
  },
  imageHeader: {
  },
  image: {
    width: Metrics.quadrupleBaseMargin * 2,
    height: Metrics.quadrupleBaseMargin * 2,
    borderColor: Colors.nightRider,
    borderWidth: 1,
    borderRadius: 100
  }
});
