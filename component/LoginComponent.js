import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Navigator,
  Button,
  TextInput,
} from 'react-native';

//import flatListData from './sty/flatlistdata'

export default class Test4 extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false, text: ''};
    this.arrayholder = [];
  }

  render() {
    console.warn('hiiiiddd');
    return (
      <View style={styles.container}>
        <View style={styles.case1} >
        <Text>로그인</Text>
        </View>
        <Separator />
        <View style={styles.case2} >
          <TextInput
         style={styles.textInputStyle}
         onChangeText={text => this.text}
         value={this.state.text}
         underlineColorAndroid="transparent"
         placeholder="Search Here"
       />
      </View>
        <View style={styles.case3}></View>

        <View style={styles.case4}></View>
        <View style={styles.case5}></View>
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
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    //backgroundColor: 'blue',
  },
  case2: {
    flex: 3,
    backgroundColor: 'white',
  },
  case3: {
    flex: 1,
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
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
    textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

AppRegistry.registerComponent('Test4', () => Test4);
