import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Navigator,
  View,
  Text
} from 'react-native';
import Login from './js/login.js';
const defaultRoute = {
  component: Login
};

class LoginDemo extends Component {
    _renderScene(route, navigator) {
    let Component = route.component;
    return (
      <Component {...route.params} navigator={navigator} />
    );
  }
    render() {
    return (
      <Navigator
        initialRoute={defaultRoute}
        renderScene={this._renderScene.bind(this)}
         />
    );
  }
}
const styles = StyleSheet.create({
})
AppRegistry.registerComponent('LoginDemo', () => LoginDemo);