import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Provider} from 'react-redux';
import store from './App/Redux/CreateStore';
import RootContainer from './App/Containers/RootContainer';

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
      flex:1,
      // backgroundColor:'red'
  }
})
