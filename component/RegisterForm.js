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
//import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';



export default class Register extends Component {
  constructor(props) {
    super(props);
    state = {
      fullName: '',
      phoneNumber   : '',
      password: '',
    }
  }

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
        onChangeText={(fullName) => this.setState({fullName})}
        />
        <TextInput
          placeholder="비밀번호"
          placeholderTextColor='#FFF'
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
          onChangeText={(password) => this.setState({password})}
          />
          <TextInput
            placeholder="휴대폰번호"
            placeholderTextColor='#FFF'
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
            ref={(input) => this.passwordInput = input}
            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
            />
          <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>회원가입</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.register}>
          <Text style={styles.reText}>로그인</Text>
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
  },
  reText:{
    fontSize:15,
    marginVertical:10,
  }
})
AppRegistry.registerComponent('Register', () => Register);
