import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import ConnectDrawer, {store} from './DrawerNavigator';
import {Provider} from 'react-redux'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectDrawer />
      </Provider>
    );
  }
}
