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

const HomeStack = createStackNavigator(
    {
        LoginPage,
        Test3,
        Test4,
        Test1
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Home',
        }),
    }
);
const SettingStack = createStackNavigator(
    {
        Test2,
        Test3,
        Test4
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Setting',
        }),
        initialRouteName: 'Test3',
    }
);


const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: HomeStack,
        Setting: SettingStack,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon = "▲";

                if(routeName === 'Home'){
                    icon = "🌈";
                } else if(routeName === 'Setting'){
                    icon = "🌙"
                }

                // can use react-native-vector-icons
                // <Icon name={iconName} size={iconSize} color={iconColor} />
                return <Text style={{color: focused && "#46c3ad" || "#888"}}>{icon}</Text>
            }
        }),
        lazy: false,
        tabBarOptions: {
            activeTintColor: "#46c3ad",
            inactiveTintColor: "#888",
        },
    }
);

const AppStack = createStackNavigator(
    {
        LoginScreen: Test,
        TabNavigator: {
            screen: TabNavigator,
            navigationOptions: ({navigation}) => ({
                header: null,
            }),
        },
    }
);

export default createAppContainer(AppStack);
//https://yuddomack.tistory.com/entry/React-Navigation%EC%9C%BC%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%ED%83%AD-%EB%84%A4%EB%B9%84%EA%B2%8C%EC%9D%B4%ED%84%B0-%ED%99%94%EB%A9%B4-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0?category=754156
