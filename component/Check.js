import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  Button,
  AppRegistry,
  SafeAreaView,
  Image,
} from 'react-native';
import { createAppContainer, NavigationScreenProps } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements'
import { Checkbox } from 'react-native-paper';


export default class Check extends Component {
  constructor(){
super();

this.state={
check:false
}
}

checkboxTest(){
  check:!this.state.check
}
  render() {
    console.log('this is navigation'+this.props.navigation);
    return (
        <SafeAreaView style={{marginTop:100, flex:1}}>
        <View>
        <Text> ' Lee!!'</Text>
        <Button
          color="#f194ff"
          onPress={() => this.props.navigation.navigate('Test2')}
          title="Go to App"
        />
        <CheckBox
  checkedIcon={<Image source={{uri:'http://pluspng.com/img-png/tick-box-png-check-check-list-hook-bird-mark-check-box-666.png'}} style={{width: 30, height: 30}}/>}
  uncheckedIcon={<Image source={{uri:'http://cdn.onlinewebfonts.com/svg/img_388862.png'}} style={{width: 30, height: 30}}/>}
  checked={this.state.checked}
  onPress={() => this.setState({checked: !this.state.checked})}
/>
      </View>
      </SafeAreaView>

    );
  }
}

AppRegistry.registerComponent('Check', () => Check);
