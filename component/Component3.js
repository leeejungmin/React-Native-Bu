/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, Switch} from 'react-native';
//import {name as appName} from './app.json';

export default class Component3 extends Component {
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
    onChangeText(value){
      this.setState({
        textValue:value
      });
    }
    onSubmit(){
      console.log("Input is Submitting jungmin!")
    };
    onSwitchChange(value){
      this.setState({
        switchValue:value
      });
    }
  render() {
      let name = this.state.showName ? this.state.name : 'Non';
    return(
      <View>
        <TextInput
          placeholder="Enter Text"
          value={this.state.textValue}
          onChangeText={(value) => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
          />
          <Text style={{color: "skyblue" }}>{this.state.textValue},{this.state.switchValue}</Text>
          <Switch
            value={this.state.switchValue}
            onValueChange={(value) => this.onSwitchChange(value)}/>


      </View>
    );
  }
}
AppRegistry.registerComponent('Component3', () => Component3);
//AppRegistry.registerComponent(appName, () => App);
