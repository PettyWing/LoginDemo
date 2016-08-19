
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowName: null
        }
    }
    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id
        this.setState({
            rowName: this.props.rowName
        });
    }
    _back() {
		this.props.navigator.pop();
	}
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.cell}>
              <Text style={styles.welcome}
                onPress={this._back.bind(this)}>
                  {this.state.rowName}
              </Text>
          </View>
          <View style={styles.cell}>
              <Text style={styles.welcome}>
                  cell2
              </Text>
          </View>
          <View style={styles.cell2}>
              <Text style={styles.welcome}>
                  cell3+11
              </Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
    },
    cell: {
        flex: 1,
        height: 50,
        backgroundColor: '#aaaaaa'
    },
    cell2:{
        flex: 2,
        height: 50,
        backgroundColor: '#aaaaaa'
    },
    welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10
        },
});

