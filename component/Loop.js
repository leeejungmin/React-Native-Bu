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
  Separator
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';
import flatListData from './../../sty/flatlistdata';
import testData from './../../sty/testData';

class ContactInfo extends React.Component {
    render() {
        return(
            <Text>{this.props.name}  ::::    {this.props.foodDescription}</Text>
            <TouchableOpacity >
            <Image source={{uri:this.props.url}} style={styles.photo} resizeMode='cover'></Image>
            </TouchableOpacity>
        );
    }
}

export default class Loop extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false, text: ''};
    this.arrayholder = [];

  }

  render() {
    return (

      <SafeAreaView style={{marginTop:50, flex:1}}>
        {testData.map((contact, i) => {
                        return (<ContactInfo name={contact.name}
                                             foodDescription={contact.desc}
                                             url={contact.url}
                                             key={i}
                                 />);
                    })}
      </SafeAreaView>

    );
  }
}



const styles = StyleSheet.create({

    textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: 'pink',
    borderStyle : 'solid',
    backgroundColor: '#FFFFFF',
    borderWidth: 5,
    },
    separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

AppRegistry.registerComponent('Loop', () => Loop);
