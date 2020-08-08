import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Alert, ScrollView} from 'react-native';

// styles
import styles from './Styles/HomeScreenStyles'

function HomeScreen() {
  return (
    <View style={styles.viewOnScreen}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
