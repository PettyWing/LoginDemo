'use strict';
import React, { Component } from 'react';
import {
  Navigator,
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class TitleComponent extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
       const {opacity, title} = this.props;
    return (
      <View style={{flexDirection:'column'}}>
        <View style={styles.container}>
            <TouchableOpacity  onPress={() => { this.buttonBackAction() } } opacity={opacity}>
                <Image style={{ width: 20, height: 20 }} source={require('../image/title/ic_menu_back.png')}  />
            </TouchableOpacity>
            <View style={{alignSelf:'center'}}>
              <Text style={styles.titleText}>{title}</Text>
            </View>
            <TouchableOpacity  onPress={() => { this.buttonBackAction() } } opacity={opacity}>
                <Image style={{ width: 20, height: 20 }} source={require('../image/title/ic_menu_back.png')}  />
            </TouchableOpacity>
          </View>
        <View style={{ height: 0.5, backgroundColor: '#BFBFBF' }}></View>
      </View>
    );
  }

  buttonBackAction() {
    const { navigator } = this.props;
    if(navigator) {
      navigator.pop();
    }
  }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 45, 
        backgroundColor: 'white', 
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    titleText: {
        fontSize: 15, 
        color: 'black',
    },
});