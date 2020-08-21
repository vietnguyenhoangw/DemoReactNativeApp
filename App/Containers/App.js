import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Provider} from 'react-redux';
import store from '../Redux/CreateStore';
import RootContainer from './RootContainer';

export default class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container : {
      flex:1
  }
})
