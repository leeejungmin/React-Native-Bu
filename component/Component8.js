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
    this.state ={ isLoading: false, text: ''};
    this.arrayholder = [];

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

  render() {
    return (
      <View>
        <View style={styles.case1} >
          <TextInput
         style={styles.textInputStyle}
         onChangeText={text => this.SearchFilterFunction(text)}
         value={this.state.text}
         underlineColorAndroid="transparent"
         placeholder="Search Here"
       />
      </View>
      <Separator />
         <FlatList
                    data ={flatListData}
                    numColumns={2}
                    renderItem = {({item,index})=>{
                        return(<FlatListItem item={item} index = {index}/>); //// what is this
                    }}
               />
        <Text> ' Min!!'</Text>
        <Button
          color="#f194ff"
          onPress={() => this.props.navigation.navigate('Playstation')}
          title="Go to App"
        />
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
      textInputStyle: {
      height: 40,
      borderWidth: 1,
      paddingLeft: 10,
      borderColor: '#009688',
      backgroundColor: '#FFFFFF',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

AppRegistry.registerComponent('Test3', () => Test3);
