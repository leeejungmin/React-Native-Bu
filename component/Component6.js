/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';
//import {name as appName} from './app.json';

export default class Component6 extends Component {
//props is for accept the value from export
  constructor(props){
    super(props);
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
    }
  },
  onPress(){
    //have to bind because we using 'this' here
    this.props.navigator.push({
      id:'component5'
    });
  }
  render() {
    return(
      <View>
        <Text>{this.state.message} </Text>
        <Text style={{color : 'skyblue'}}>{this.state.name} </Text>
        <Text style={{color : 'skyblue'}}>{this.state.email} </Text>
        <Button
          onPress={this.onPress.bind(this)}
          title="Go Back"
          />
      </View>
    );
  }
}
AppRegistry.registerComponent('Component6', () => Component6);
//AppRegistry.registerComponent(appName, () => App);

.lo0989iukjm,n nhu767tygfvc dsew4323qwaz``  `1  `\-++-
