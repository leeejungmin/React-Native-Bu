import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Navigator,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import { createAppContainer, NavigationScreenProps } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import Test1 from './src/component/test';
import Test2 from './src/component/test2';
import Test3 from './src/component/test3';
import Test4 from './src/component/test4';
import LoginForm from './src/Login/LoginForm';
import LoginPage from './src/Login/LoginPage';
import Register from './src/Login/Register';
import flatListData from './sty/flatlistdata';

class Apps extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false, text: ''};
    this.arrayholder = [];

  }


  render() {
    console.warn('hiiiiddd');
    return (
      <View style={styles.container}>

        <View style={styles.case2}>
       <Register/>
        </View>

        <View style={styles.case3}>
          <View style={styles.case4} >
          <Icon  name="ios-search" size={40} onPress={() => this.props.navigation.navigate('Test1')}
          style={{marginHorizontal: 30,marginVertical: 10,}}/>
          </View>
          <View style={styles.case5} >
          <Icon  name="ios-musical-note" size={40} onPress={() => this.props.navigation.navigate('Test2')}
          style={{marginHorizontal: 30,marginVertical: 10,}}/>
          </View>
          <View style={styles.case6}>
          <Icon  name="ios-sunny" size={40} onPress={() => this.props.navigation.navigate('Test3')}
          style={{marginHorizontal: 30,marginVertical: 10,}}/>
          </View>
          <View style={styles.case7}>
          <Icon  name="ios-airplane" size={40} onPress={() => this.props.navigation.navigate('Test4')}
          style={{marginHorizontal: 30,marginVertical: 10,}}/>
          </View>
        </View>
      </View>
    );
  }
}

function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  case2: {
    flex: 4,
    backgroundColor: 'white',
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  case3: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  case4: {
    flex: 1,
    //backgroundColor: 'powderblue',
  },
  case5: {
    flex: 1,
    //backgroundColor: 'skyblue',
    //marginBottom: 10,
  },
  case6: {
    flex: 1,
    //backgroundColor: 'steelblue',

    borderRadius: 5,
  },
  case7: {
    flex: 1,
    //backgroundColor: 'steelblue',

    borderRadius: 5,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const stackN = createStackNavigator({
  Playstation: { screen: Apps, params: { product: 'Playstation' } },
  Test1: { screen: Test1, params: { product: 'Xbox' } },
  Test2: { screen: Test2, params: { product: 'Xbox' } },
  Test3: { screen: Test3, params: { product: 'Xbox' } },
  Test4: { screen: Test4, params: { product: 'Xbox' } },
});
const App = createAppContainer(stackN);
export default App;
