/**
 * @format
 */

import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, Navigator} from 'react-native';

import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';



export default class Component1 extends Component {
  displayName: 'Component1',
  /*constructor(props){
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

  renderScene(route, navigator){
    switch (route.id) {
      case 'component5':
        return (<Component5 navigator={navigator} title="component5"/>);
      case 'component6':
        return (<Component6 user={route.user} navigator={navigator} title="component6"/>);
      }};*/

  render() {
    return(
      <Navigator
      initialRoute={{id: 'component5'}}
      renderScene={this.renderScene}
      configureScreen={(route,routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
};

AppRegistry.registerComponent('Component1', () => Component1);
