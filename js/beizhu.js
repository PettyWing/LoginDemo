
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
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import TitleComponent from "./Title";
export default class text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beizhu: null
        }
    }
    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id
        this.setState({
            beizhu: this.props.beizhu
        });
    }
    goback(){
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop({
                params: {
              beizhu: this.state.beizhu,
              }})

        }
    }
  render() {
    return (
      <View style={styles.container}>
          <TitleComponent opacity={1.0} title='编辑备注' {...this.props}/>
          <View style={{borderWidth:1,borderColor:'white',borderRadius:4,marginTop:20,}}>
            <TextInput
                style={styles.input_password}
                placeholder={this.state.beizhu}
                secureTextEntry={true}
                onChangeText={(text) => {this.setState({beizhu:text})}}
                onSubmitEditing={(text) => {this.setState({beizhu:text})}}
                value={this.state.beizhu}/>
            </View>
            <TouchableOpacity 
                style={{width:300,backgroundColor:'#0096FF',marginTop:20,alignItems:'center',justifyContent:'center',padding:10,borderRadius:4,}}
                onPress={this.goback.bind(this)}>
                <Text style={{fontSize: 20,color:'white',}}>
                    返回
                </Text>
            </TouchableOpacity>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1,
        backgroundColor:'#F3F3F3'
    },
    input_password:{
        backgroundColor:'white',
        textAlign:'left',
        fontSize:15,
    },
});

