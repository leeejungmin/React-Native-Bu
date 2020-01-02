/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import {name as appName} from './app.json';

export default class Component2 extends Component {
    constructor(props){
      super(props);
      this.state = {
        name:'Bread Jungmin very good!',
        showName: true,
        message: this.props.message
      }
    }
    static defaultProps = {
      message: 'Hi there'
    }
  render() {
      let name = this.state.showName ? this.state.name : 'Non';
    return(
      <View>
        <Text>{this.state.message} </Text>
        <Text style={{color : 'skyblue'}}>{name} </Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('Component2', () => Component2);
//AppRegistry.registerComponent(appName, () => App);
