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
  Image,
} from 'react-native';
import { createAppContainer, NavigationScreenProps } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginForm from './LoginForm';


export default class LoginPage extends Component {
   constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      password: '',
    }
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source="https://upload.wikimedia.org/wikipedia/commons/5/58/Octocat_GitHub_Mascot.png"
          />
        <Text>This is login page  </Text>
        <Text>Put your information here</Text>
        </View>
          <View style={styles.formContainer}>
            <LoginForm  navigation={this.props.navigation} />
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',

  },
  logo:{
    width:100,
    height: 100,
    backgroundColor: '#00ffff',
    marginVertical:10,
  },

})
AppRegistry.registerComponent('LoginPage', () => LoginPage);
