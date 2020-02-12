import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  Button,
  AppRegistry,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';

import { createAppContainer, NavigationScreenProps } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import flatListData from './../../sty/flatlistdata';

class FlatListItem extends Component{

    render() {
        return(
          <TouchableOpacity
                style={{flex:1/2,
                aspectRatio:0.5}}>
              <Image source={{uri:this.props.item.imageUrl}} style={{flex: 1}} resizeMode='cover'></Image>
              <Text>{this.props.item.name}</Text>
          </TouchableOpacity>
        );
    }
}

//horizontal = {true}
export default class Test3 extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false, text: '', obj : []};
    this.arrayholder = [];
    this.obj = { name: 'John', age: 30, email: 'New York@gmail.com', Clothes:'' };
  }
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.name? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    //console.log(this.state.dataSource);
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }

  searchChange = (event) => {
    this.obj.Clothes = event;
    this.setState({obj:this.obj});
    //console.log('this vent',event);
    if(event==null){
     console.log('this is null');
    }

     //this.obj.Clothes = event;
    console.log('SteteObj',this.state.obj);
    console.log('FirstInput',this.FirstInput.object);
  }

  searchSubmit = () =>{
    console.log('by submit',this.state.obj);
    console.log('submit is working');
    return (
      fetch('http://192.168.25.26:3000/test', {
        method: 'POST',
        body: JSON.stringify(this.state.obj),
        headers: {
          //'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
        .then(response => response.json())
        .then(response => {
          var dataSource = response;
          console.log(dataSource)
          this.setState({
          //arrayholder : dataSource
          //console.log('this is array', this.dataSource);
        })
        .then(responseJson => {}
          //console.log(responseJson)
        );
          console.log('kkk', this.arrayholder);
        })
        .catch(error => {
          console.error(error);
          console.log('errorr why?????');
        })
    );
  }
  render() {
    return (
      <SafeAreaView style={{marginTop:50, flex:1}}>
      <View>
        <View style={styles.case1} >
          <TextInput style={[styles.textInput]}
          ref={(ref) => { this.FirstInput = ref; }}
          placeholder='입력하세요'
          placeholderTextColor='#bbb'
          onChangeText={(event) =>
          this.searchChange(event)}
          returnKeyType='search'
          autoFocus={true}
          //value={ this.state.text }
          selectionColor='orange'
          onSubmitEditing={this.searchSubmit}
          clearButtonMode="while-editing"
          underlineColorAndroid="transparent"
          />
      </View>
      <Separator />

        <Text> {this.state.obj.Clothes}</Text>
        <Button
          color="#f194ff"
          onPress={() => this.props.navigation.navigate('Playstation')}
          title="Go to App"
        />
      </View>
      </SafeAreaView>

    );
  }
}

function Separator() {
  return <View style={styles.separator} />;
}


const styles = StyleSheet.create({

      textInputStyle: {
      height: 40,
      borderWidth: 1,
      paddingLeft: 10,
      borderColor: 'pink',
      borderStyle : 'solid',
      backgroundColor: '#FFFFFF',

    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

AppRegistry.registerComponent('Test3', () => Test3);
