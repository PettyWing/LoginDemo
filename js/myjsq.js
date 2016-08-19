'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Image,
  ListView
} from 'react-native';
import TitleComponent from "./Title";
import secondpage from "./text";
import wificonnect from "./wificonnect";
import beizhu from "./beizhu";
var img = require('../image/myjsq/more_btn.png');
var img1 = require('../image/myjsq/zn_qr_code_wifi_bg.png');
var imgshow = require('../image/myjsq/zn_default_driver_bg.png');
var data = [];
export default class Myjsq extends Component {
      
    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        data:this._Datainit(),
        dataSource: ds.cloneWithRows(this._Datainit())
      };
    }
    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id
        this.setState({
            beizhu: this.props.beizhu
        });
    }
    render() {
      return (
        <View style={{flexDirection:'column',backgroundColor:'#F3F3F3'}}>
          <TitleComponent opacity={1.0} title='我的订单' {...this.props}/>
          <ListView
            dataSource={ this.state.dataSource}
            renderRow={this._renderItem.bind(this)} //bind ?
            renderSeparator={this._renderSeparator}
            style={{backgroundColor: 'white',height:500}}
            initialListSize={2}
          />
          <TouchableOpacity 
            style={styles.addbutton}
            onPress={this.addlist.bind(this)}>
            <Text style={{fontSize: 20,color:'white',}}>
              添加净水器
            </Text>
          </TouchableOpacity>
      </View>
      );
    }
    _Datainit(){
       data = [{
        image:  imgshow,
        title: '净丽直饮机',
        beizhu:'',
        number: 'SN:EY668HX57332',
        state: '1',//1、在线 2、离线 3、故障 4、关机 5、未连网
        },{
          image:  imgshow,
          title: '净炫直饮机',
          beizhu:'（厨房里的净水器）',
          number: 'SN:EY668HX57333',
          state: '2',
        },{
          image:  imgshow,
          title: '净丽直饮机',
          beizhu:'',
          number: 'SN:EY668HX57334',
          state: '3',
        }];
      return data;
    }
    addlist(){
      let newData = {
          image:  imgshow,
          title: '净丽直饮机',
          beizhu:'',
          number: 'SN:EY668HX57334',
          state: '3',
      }
      this.state.data.push(newData);
      this.setState({dataSource: this.state.dataSource.cloneWithRows(this.state.data)});
    }
    _renderItem (rowData, sectionID, rowID) {
      let statename,statecolor;
      switch(rowData.state){
        case '1':
          statename='在线';
          statecolor='green';
          break
        case '2':
          statename='离线';
          statecolor='gray';
          break
        case '3':
          statename='故障';
          statecolor='red';
          break
      }
      return(
        <View style={styles.container}>
          <TouchableOpacity style={styles.Topcontainer} onPress={this.pressrow.bind(this,1,rowData,sectionID,rowID)}>
            <View style={styles.Leftcontainer}> 
              <Image
                source={rowData.image}
                style={styles.imgshow}/>
              <View style={styles.textcontainer}>
                <Text style={{fontSize: 18,color:'black'}}>
                  {rowData.title+rowData.beizhu}
                </Text>
                <Text style={{fontSize: 12,color:'gray'}}>
                  {rowData.number}
                </Text>
                <Text style={{fontSize: 12,color:'white',textAlign:'center',width:40,backgroundColor:statecolor}}>
                  {statename}
                </Text>
              </View>
            </View>
            <View style={{flex:1}}>
              <Image 
                source={img}
                style={styles.image_goto}/>
            </View>
          </TouchableOpacity>
          <View style={styles.Bottomcontainer}>
            <TouchableOpacity style={styles.chosebutton}
              onPress={this.pressrow.bind(this,2,rowData,sectionID,rowID)}>
              <Image 
                source={img1}
                style={styles.image_button}/>
              <Text style={{fontSize: 15}}>
                连接网络
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chosebutton}
              onPress={this.pressrow.bind(this,3,rowData,sectionID,rowID)}>
              <Image 
                source={img1}
                style={styles.image_button}/>
              <Text style={{fontSize: 15}}>
                编辑备注
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chosebutton} 
              onPress={this.pressrow.bind(this,4,rowData,sectionID,rowID)}>
              <Image 
                source={img1}
                style={styles.image_button}/>
              <Text style={{fontSize: 15}}>
                解除绑定
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
          <View
            style={{
              height:10,
              backgroundColor: '#F3F3F3' ,
            }}
            key={`${sectionID}-${rowID}`}
          />
        );
      }
   pressrow(buttonID,rowData,sectionID,rowID){
     switch(buttonID){
        case 1:
          console.log("这是第"+rowID+"行，内容为"+rowData.title);
          break
        case 2:
           this.props.navigator.push({
            title: 'wificonnect',
            component: wificonnect,
            params: {
              rowName: rowData.title,
              }
            });
            break
        case 3:
           this.props.navigator.push({
            title: 'beizhu',
            component: beizhu,
            params: {
              beizhu: rowData.beizhu,
              }
            });
            break
        case 4:
          console.log(rowID+"");
          this.state.data.splice(rowID,1);
          this.setState({dataSource: this.state.dataSource.cloneWithRows(this.state.data)});
          break
     }
   }
 } 
const styles = StyleSheet.create({
  container:{ 
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
    height:150,
    backgroundColor:'white'
  },
  Topcontainer:{
    flex:2,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  Leftcontainer:{
    flex:10,
    flexDirection:'row',
  },
  imgshow:{
    width:50,
    height:50,
    resizeMode:'stretch',
    margin:20,
  },
  textcontainer:{
    flexDirection:'column',
    marginTop:15,
  },
  image_goto:{
    width:20,
    height:30,
    resizeMode:'stretch'
  },
  Bottomcontainer:{
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
  },
  chosebutton:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  image_button:{
    width:30,
    height:30,
    resizeMode:'stretch'
  },
  addbutton:{
    backgroundColor:'#0096FF',
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:50,
    marginRight:50,
    padding:10,
    borderRadius:4,
  }
});