'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class Head extends Component{
    render() {
        return (
        <View style={styles.container}>
          <Text style={styles.textSize}>
                  登录
          </Text>
        </View>

        );
  }
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:50,
        alignItems:'center',
        justifyContent: 'center', 
    },
    textSize:{
        fontSize: 18,
        color:'black',
    }
});