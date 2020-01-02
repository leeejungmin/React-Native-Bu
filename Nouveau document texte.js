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
} from 'react-native';
import { createAppContainer, NavigationScreenProps } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import Test1 from './src/component/test';
import Test2 from './src/component/test2';
import Test3 from './src/component/test3';

class Apps extends Component {
  render() {
    console.warn('hiiiiddd');
    return (
      <View style={styles.container}>
        <View style={styles.case1} />
        <View style={styles.case2}>
        <Separator />
          <Text> 'goood Jung!!'</Text>
          <Separator />
        </View>
        <Separator />
        <View style={styles.case3}>
          <View style={styles.case4} >
          <Icon  name="ios-search" size={70} onPress={() => this.props.navigation.navigate('Test1')}
          style={{marginHorizontal: 30,marginVertical: 10,}}/>
          </View>
          <View style={styles.case5} >
          <Icon  name="ios-musical-note" size={70} onPress={() => this.props.navigation.navigate('Test2')}
          style={{marginHorizontal: 30,marginVertical: 10,}}/>
          </View>
          <View style={styles.case6}>
          <Icon  name="ios-sunny" size={70} onPress={() => this.props.navigation.navigate('Test3')}
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
  case1: {
    flex: 1,
    backgroundColor: 'blue',
  },
  case2: {
    flex: 3,
    backgroundColor: 'white',
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  case3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  case4: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  case5: {
    flex: 1,
    backgroundColor: 'skyblue',
    //marginBottom: 10,
  },
  case6: {
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
});
const App = createAppContainer(stackN);
export default App;
