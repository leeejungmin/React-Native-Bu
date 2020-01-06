import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  Button,
  AppRegistry,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import { createAppContainer, NavigationScreenProps } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';



export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      barStyple="light-content"/>
      <TextInput
        placeholder="아이디 또는 이메일"
        placeholderTextColor='#FFF'
        returnKeyType="next"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onSubmitEditing={() => this.passwordInput.focus()}
        />
        <TextInput
          placeholder="비밀번호"
          placeholderTextColor='#FFF'
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
          />
          <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding:20
  },
  input: {
    height: 40,
    backgroundColor: '#00ced1',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10,
    fontWeight:'700',
  },
  buttonText: {
    textAlign: 'center',
    color:'#FFF',
    fontWeight:'700',
  },
  buttonContainer:{
    backgroundColor: '#2980b9',
    paddingVertical: 15,
  }
})
AppRegistry.registerComponent('LoginForm', () => LoginForm);
