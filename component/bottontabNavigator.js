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
import Test from './src/component/test';
import Test1 from './src/component/test1';
import Test2 from './src/component/test2';
import Test3 from './src/component/test3';
import Test4 from './src/component/test4';
import LoginForm from './src/Login/LoginForm';
import LoginPage from './src/Login/LoginPage';
import Register from './src/Login/Register';
import flatListData from './sty/flatlistdata';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator} from 'react-navigation';

class Apps extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false, text: ''};
    this.arrayholder = [];

  }

  //<AppTabNavigator/>

  render() {
    console.warn('hiiiiddd');
    return (
      <SafeAreaView style={{flex:1}}>
      </SafeAreaView>
    );
  }
}

function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
//const createNa = createMaterialBottomTabNavigator({
export default createMaterialBottomTabNavigator({
  Test: {
    screen: Test,
    navigationOptions:{
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" color={tintColor} size={24}/>
      )
    }
  },
  Test2: {
    screen: Test2,
    navigationOptions:{
      tabBarLabel: 'Test2',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-airplane" color={tintColor} size={24}/>
      )
    }
  },
  Test3: {
    screen: Test3,
    navigationOptions:{
      tabBarLabel: 'Test3',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-sunny" color={tintColor} size={24}/>
      )
    }
  },
  Test4: {
    screen: Test4,
    navigationOptions:{
      tabBarLabel: 'Test4',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-bus" color={tintColor} size={24}/>
      )
    }
   }
  },{
    initialRouteName: 'Test',
    order:['Test', 'Test1'],
    activeTintColor: 'orange',
    inactiveTintColor: 'grey',
    shifting: true,

  }
)

const App = createAppContainer(createNa);
export default App;
