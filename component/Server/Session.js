import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  Button,
  AppRegistry,
  SafeAreaView,
  AsyncStorage,
  TouchableHighlight,
} from 'react-native';
import { createAppContainer, NavigationScreenProps } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';



export default class Test extends Component {

  constructor(props){
          super(props);
          this.state={
              show:false
          }
  }

  _saveData = () => {

  const data = true;

  AsyncStorage.setItem('data', data);

  }

  _saveDatas = () => {
      const obj = {

  'name':'hide',

  'phone':'010-1234-5678',

  'dept':'computer'

  }

  AsyncStorage.setItem('obj', JSON.stringify(obj));

  }


  _removeData = () => {

     AsyncStorage.removeItem('data').then((check) => {
      if (check!=true) {
        this.setState({show:false})
      } else {
        console.log('No user yet Created');
      }
  })

  }

  _touchevent = () =>{
    console.log('This is event');
  }

  _retrieveData = async () => {
    try {

       AsyncStorage.getItem('data').then((check) => {
      if (check) {
        this.setState({show:true})
      } else {
        console.log('this token is expired');
      }
        })

    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  _retrieveDatas = async () => {
    try {
      const value = await AsyncStorage.getItem('obj',(err, result,store) => {

      });
      if (value !== null) {
        // We have data!!
        let json = JSON.parse(value);
        console.log(json['name']);
      }

    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

renderTouchableHighlight(){
    if(this.state.show){
       return(
           <TouchableHighlight
               style={{borderColor:'black',borderWidth:1,marginTop:20}}
               onPress={this.hideCancel}>
               <View>
                   <Text>Cancel</Text>
               </View>
           </TouchableHighlight>
       )
    }
    return null;
}

  render() {
    console.log('this is navigation'+this.props.navigation);
    return (
        <SafeAreaView style={{marginTop:100, flex:1}}>
        <View>
        <Text> ' Lee!!'</Text>
        <Button
          color="#f194ff"
          onPress={this._saveData}
          //onPress={() => this.props.navigation.navigate('Test2')}
          title="Save"
        />
         <Button
          color="#f194ff"
          onPress={this._retrieveData}
          //onPress={() => this.props.navigation.navigate('Test2')}
          title="Show"
        />
        <Button
         color="#f194ff"
         onPress={this._removeData}
         //onPress={() => this.props.navigation.navigate('Test2')}
         title="remove"
       />
       <Button
        color="#f194ff"
        onPress={this._saveDatas}
        //onPress={() => this.props.navigation.navigate('Test2')}
        title="Json"
      />
      <Button
       color="#f194ff"
       onPress={this._retrieveDatas}
       //onPress={() => this.props.navigation.navigate('Test2')}
       title="SeeJson"
     />
       {this.renderTouchableHighlight()}
       {this.state.show?'good':'job'}
      </View>
      </SafeAreaView>

    );
  }
}

AppRegistry.registerComponent('Test', () => Test);
