import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Alert, ScrollView} from 'react-native';

// styles
import styles from './Styles/HomeScreenStyles';

// redux
import {useSelector, useDispatch} from 'react-redux';
import AppActions from '../../Redux/AppRedux';
import {TouchableOpacity} from 'react-native-gesture-handler';

// function
import {openAppSettings} from '../../Functions/PermissionFunction';

function HomeScreen() {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.app);
  const isAllowLocation = appState.isAllowLocation;

  const isNotAllowLocation = () => {
    const permisionText =
      'Too many post near your location, we need to determine your location.\n\nPlease turn on location services in your phone settings.';
    return (
      <TouchableOpacity style={styles.permisionBtn} onPress={openAppSettings}>
        <Text style={styles.permisionText}>{permisionText}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.viewOnScreen}>
      {!isAllowLocation ? isNotAllowLocation() : null}
    </View>
  );
}

export default HomeScreen;
