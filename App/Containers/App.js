import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from '../Redux/CreateStore';
import RootContainer from './RootContainer';
import PushNotificationController from './PushNotificationController'

export default class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootContainer />
          <PushNotificationController />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
