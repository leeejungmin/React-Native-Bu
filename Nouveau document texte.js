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

class Apps extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false, text: ''};
    this.arrayholder = [];
    this.isLoadings = 'this is working';
  }

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.name? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }
componentDidMount(){
  return fetch('https://jsonplaceholder.typicode.com/users')
  //return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){
        this.arrayholder = responseJson;
      });

    })
    .catch((error) =>{
      console.error(error);
    });
}
 //<Text >{item.title} 'is running ther business' {item.releaseYear} </Text>
  _renderItem = ({item}) => (

  //  <TouchableHighlight onPress={() => {this.onPress(item).bind(this)}}>
    <View style= {{flex: 1, padding: 20}} >
      <Text >{item.name} 'is running ther business' {item.company.name} </Text>

    </View>
  //  </TouchableHighlight>
);

  render() {
    console.warn('hiiiiddd');
    return (
      <View style={styles.container}>
        <View style={styles.case1} >
          <TextInput
         style={styles.textInputStyle}
         onChangeText={text => this.SearchFilterFunction(text)}
         value={this.state.text}
         underlineColorAndroid="transparent"
         placeholder="Search Here"
       />
      </View>
        <View style={styles.case2}>
        <Separator />

          <FlatList
            data={this.state.dataSource}
            renderItem={this._renderItem}
            style={{ marginTop: 10 }}
            keyExtractor={item => item.id.toString()}
          />

          <Separator />
        </View>

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
    flex: 0.5,
    //backgroundColor: 'blue',
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

const stackN = createStackNavigator({
  Playstation: { screen: Apps, params: { product: 'Playstation' } },
  Test1: { screen: Test1, params: { product: 'Xbox' } },
  Test2: { screen: Test2, params: { product: 'Xbox' } },
  Test3: { screen: Test3, params: { product: 'Xbox' } },
});
const App = createAppContainer(stackN);
export default App;
