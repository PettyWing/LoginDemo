
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
            rowName: null
        }
    }
    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id
        this.setState({
            rowName: this.props.rowName
        });
    }
  render() {
    return (
      <View style={styles.container}>
          <TitleComponent opacity={1.0} title='连接网络' {...this.props}/>
          <View style={{flex:1,alignItems:'center',justifyContent:'flex-start',marginTop:20,}}>
            <View style={styles.container_wifiname}>
                <Image 
                    source={require('../image/myjsq/zn_qr_code_wifi_bg.png')}
                    style={styles._image}/>
                <Text style={{fontSize: 18,color: 'black',}}>
                    {this.state.rowName}
                </Text>
            </View>
            <View style={styles.container_password}>
                <Image 
                    source={require('../image/login/zn_login_txt_code.png')}
                    style={styles._image}/>
                <TextInput
                    style={styles.input_password}
                    placeholder="请输入验证码"
                    maxLength={30}/>
            </View> 
            <TouchableOpacity 
                style={styles.connectbutton}>
                <Text style={{fontSize: 20,color:'white',}}>
                    连接
                </Text>
            </TouchableOpacity>           
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1,
    },
    container_wifiname: {
        width:300,
        flexDirection:'row',
        height: 50,
        backgroundColor: 'transparent',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    _image:{
        width:30,
        height:30,
        resizeMode:'stretch',
        margin:5,
    },
    container_password: {
        width:300,
        flexDirection:'row',
        height:50,
        backgroundColor: 'transparent',
        alignItems:'center',
        justifyContent:'flex-start',
        borderWidth:1,
   	    borderColor:'#cccccc',
        borderRadius:2,
    },
    input_password:{
        width:150,
        height:40,
        backgroundColor:'transparent',
        textAlign:'left',
        fontSize:18,
    },
    connectbutton:{
        width:300,
        backgroundColor:'#0096FF',
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        borderRadius:4,
    }
});

