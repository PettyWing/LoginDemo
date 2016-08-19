'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from 'react-native';
import Head from "./head";
import secondpage from "./text";
import myjsq from "./myjsq";
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            phone:"",
            password:"",
            bt_passwordstate:false,
            bt_passtate:false,
            bt_code:"获取验证码",
            sum:60,
        }
    }
    go(phone,password){
        ToastAndroid.show("phone"+phone+"\npassword"+password, ToastAndroid.LONG);
        this.props.navigator.push({
			title: 'secondpage',
			component: secondpage,
            params: {
				phone: this.state.phone,
				password: this.state.password,
				}
			})
    }
    gotolist(){
        ToastAndroid.show("goto", ToastAndroid.LONG);
        this.props.navigator.push({
			title: 'myjsq',
			component: myjsq,
            params: {
				phone: this.state.phone,
				password: this.state.password,
				}
			})
    }
    render() {
        let active_code =  this.state.bt_passwordstate?require('../image/login/zn_login_code_btn.png'):require('../image/login/zn_login_txt_bg.png');
        let active_pass =  this.state.bt_passtate?require('../image/login/zn_login_code_btn.png'):require('../image/login/zn_login_txt_bg.png');
        return (
            <View style={styles.container}>
                <Head/>
                <View style={styles.container_phone}>
                    <Image 
                        source={require('../image/login/zn_login_txt_phone.png')}
                        style={styles.image_phone}/>
                    <TextInput
                        style={styles.input_phone}
                        placeholder="请输入手机号"
                        maxLength={11}//ios中为maxLength='11' ,android中为maxLength={11}
                        onChangeText={(text) => {this.setState({phone:text})}}
                        onSubmitEditing={(text) => {this.setState({phone:text})}}
                        onChange={(event)=>{
                            if(event.nativeEvent.text.length=="11"){
                                this.setState({bt_passwordstate:true});
                                if(this.state.password.length=="6")
                                    this.setState({bt_passtate:true});
                            }
                            else{
                                this.setState({bt_passtate:false});
                                this.setState({bt_passwordstate:false});
                            }
                        }}
                        value={this.state.phone}
                        keyboardType='numeric'/>
                </View>
                <View style={styles.container_password}>
                    <View style={styles.container_password1}>
                        <Image 
                            source={require('../image/login/zn_login_txt_code.png')}
                            style={styles.image_password}/>
                        <TextInput
                            style={styles.input_password}
                            placeholder="请输入验证码"
                            maxLength={6}
                            secureTextEntry={true}
                            onChangeText={(text) => {this.setState({password:text})}}
                            onSubmitEditing={(text) => {this.setState({password:text})}}
                            onChange={(event)=>{
                                if(this.state.phone.length=="11"&&event.nativeEvent.text.length=="6")
                                    this.setState({bt_passtate:true});
                                else
                                    this.setState({bt_passtate:false});
                            }}
                            value={this.state.password}
                            keyboardType='numeric'/>
                    </View>
                    <TouchableOpacity 
                        disabled={!(this.state.bt_passwordstate)}
                        onPress={()=>{
                            this.interval=setInterval(() => 
                            {
                                this.setState({sum:(this.state.sum-1)});
                                this.setState({bt_code:this.state.sum+"秒后重试"});
                                this.setState({bt_passwordstate:false});
                            if(this.state.sum==0)
                            {
                                this.interval && clearInterval(this.interval);
                                this.setState({bt_code:"获取验证码"});
                                this.setState({bt_passwordstate:true});
                                this.setState({sum:60});
                            }
                            },50);}}>
                        <Image 
                            source={active_code}
                            style={styles.button_password}>
                            <Text style={styles.textSize}>{this.state.bt_code}</Text>
                        </Image>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    disabled={!(this.state.bt_passtate)}
                    onPress={this.go.bind(this,this.state.phone,this.state.password)} >
                    <Image
                        source={active_pass} 
                        style={styles.button_pass}>
                        <Text style={styles.textSize}>登录</Text>
                    </Image>
                </TouchableOpacity>
                <View style={styles.view_line}>
                    <Text style={styles.textSize_show}>------社交账号直接登录------</Text>
                </View>


                <View style={styles.container_logo}>
                    <TouchableOpacity 
                        accessible={false}
                        style={styles.logo}
                        onPress={this.gotolist.bind(this)} >
                        <Image 
                            source={require('../image/login/zn_login_third_qq.png')}
                            style={styles.image_logo}/>
                        <Text style={styles.textSize_show}>
                            QQ登录
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logo}>
                        <Image 
                            source={require('../image/login/zn_login_third_weixin.png')}
                            style={styles.image_logo}/>
                        <Text style={styles.textSize_show}>
                            微信登录
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>//
        );
  }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        alignItems:'center',
    },
    container_phone: {
        flex: 1,
        flexDirection:'row',
        height: 50,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderWidth:1,
   	    borderColor:'black',
        borderRadius:4,
        marginTop:40,
        alignItems:'center',
        justifyContent:'center',
    },
    input_phone:{
        width:300,
        height:40,
        backgroundColor:'transparent',
        textAlign:'left',
        fontSize:15,
    },
    image_phone:{
        width:30,
        height:30,
        resizeMode:'stretch',
    },
    container_password: {
        flex: 1,
        flexDirection:'row',
        width:330,
        height:50,
        backgroundColor: 'transparent',
        marginTop:20,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    container_password1:{
        flexDirection:'row',
        height: 50,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderWidth:1,
   	    borderColor:'black',
        borderRadius:4,
        alignItems:'center',
    },
    image_password:{
        width:30,
        height:30,
        resizeMode:'stretch',
    },
    input_password:{
        width:150,
        height:40,
        backgroundColor:'transparent',
        textAlign:'left',
        fontSize:15,
    },
    button_password:{
        height:50,
        width:100,
        marginLeft:40,
        alignItems:'center',
        backgroundColor:'transparent',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:4,
    },
    textSize:{
        fontSize: 15,
        color:'black'
    },
    textSize_show:{
        fontSize: 15,
        color:'#bfbfbf'
    },
    button_pass:{
        height:50,
        width:330,
        marginTop:40,
        alignItems:'center',
        backgroundColor:'#0188CA',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:4,
    },
    view_line:{
        width:330,
        height:50,
        marginTop:60,
        alignItems:'center',
        justifyContent:'center',
    },
    image_logo:{
        width:60,
        height:60,
        resizeMode:'stretch',
    },
    
    container_logo:{
        width:250,
        flexDirection:'row',
        alignItems:'center',
        height:100,
        marginTop:40,
    },
    logo: {
        flex: 1,
        height: 100,
        alignItems:'center',
    },
});

