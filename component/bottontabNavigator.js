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
import Check from './src/component/Check';
import Naver from './src/component/Naver';
import LoginForm from './src/Login/LoginForm';
import LoginPage from './src/Login/LoginPage';
import Register from './src/Login/Register';
import flatListData from './sty/flatlistdata';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

class Apps extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false, text: ''};
    this.arrayholder = [];

  }

  //<AppTabNavigator/>
  toggleDrawer = () => {
     //Props to open/close the drawer
     this.props.navigationProps.toggleDrawer();
   };

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

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
const MyDrawerNavigator = createDrawerNavigator({
  Register: {
    screen: Register,
    navigationOptions:{
      tabBarLabel: 'LoginPage',
     tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]}  size={25} name={'ios-cloud'}/>
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: 'white',
                barStyle: { backgroundColor: '#f69b31' },
    }
  },
  Test2: {
    screen: Test2,
    navigationOptions:{
      tabBarLabel: 'LoginPage',
     tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-cloud'}/>
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: 'white',
                barStyle: { backgroundColor: '#f69b31' },
    }
  },
});
const Store = createStackNavigator({
  Check: { screen: Check, params: { product: 'Playstation' } },
  Test1: { screen: Test1, params: { product: 'Xbox' } },
  Register: { screen: Register, params: { product: 'Xbox' } },
});
const createNa = createMaterialBottomTabNavigator({
//export default createMaterialBottomTabNavigator({
  Test: {
    screen: Test,
    navigationOptions:{
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: 'white',
                barStyle: { backgroundColor: '#f69b31' },
    }
  },
  Test2: {
    screen: Test2,
    navigationOptions:{
      tabBarLabel: 'Test2',
      tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-sunny'}/>
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: 'white',
                barStyle: { backgroundColor: '#f69b31' },
    }
  },
  Test3: {
    screen: Test3,
    navigationOptions:{
      tabBarLabel: 'Test3',
      tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-bus'}/>
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: 'white',
                barStyle: { backgroundColor: '#f69b31' },
    }
  },
  Store: {
    screen: Store,
    navigationOptions:{
      tabBarLabel: 'Store',
      tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-book'}/>
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: 'white',
                barStyle: { backgroundColor: '#f69b31' },
                hideHeader: true,
    }
  },
  LoginPage: {
    screen: LoginPage,
    navigationOptions:{
      tabBarLabel: 'LoginPage',
     tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-cloud'}/>
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: 'white',

                barStyle: { backgroundColor: '#f69b31' },
    }
  },
  /*Register:{
    screen: MyDrawerNavigator,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} onPress={() => this.props.navigation.toggleDrawer().bind(this)} size={25} name={'ios-person'}/>
                    </View>),
                     activeColor: '#f60c0d',
                inactiveColor: 'white',
                barStyle: { backgroundColor: '#f69b31' },
      header: <NavigationDrawerStructure navigationProps={navigation} />,
    }

  },*/
  Naver:{
    screen: Naver,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]}  size={25} name={'ios-person'}/>
                    </View>),
                     activeColor: '#f60c0d',
                inactiveColor: 'white',
                barStyle: { backgroundColor: '#f69b31' },
     // header: <NavigationDrawerStructure navigationProps={navigation} />,
    }

  },
  /*Register: {
    screen: Register,
    navigationOptions:{
                tabBarLabel:'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: 'white',
                barStyle: { backgroundColor: '#f69b31' },
               headerShown: false,
               header: null,
            }
   }*/
  },{
    initialRouteName: 'Test',
    shifting: true,

  }
)


const App = createAppContainer(createNa);
export default App;
