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
} from 'react-native';
import { createAppContainer, NavigationScreenProps } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';



export default class Test extends Component {



_saveData = () => {

const data = "Jungmin";

AsyncStorage.setItem('data', data);

}

_touchevent = () =>{
  console.log('This is event');
}

_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('data');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
    console.log(error);
  }
};


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
      </View>
      </SafeAreaView>

    );
  }
}

AppRegistry.registerComponent('Test', () => Test);
