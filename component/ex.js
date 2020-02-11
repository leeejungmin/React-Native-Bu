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
AppRegistry,
TouchableHighlight,
Image,
} from 'react-native';
//const obj = { name: 'John', age: 30, email: 'New York@gmail.com', Clothes:'Clothes', };

export default class Give extends Component {
constructor(props) {
  super(props);
  this.state = {
    isLoading: false,
    text: '',
    name: '',
    email: 'ljm3453@gmail.com',
  };
  this.arrayholder = [];
  this.obj = { name: 'John', age: 30, email: 'New York@gmail.com', Clothes:'Clothes', };
}

submitAction() {
  console.log('submit is working');
  return (
    fetch('http://192.168.137.1:3000/jsonss', {
      method: 'POST',
      body: JSON.stringify(this.obj),
      headers: {
        //'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        console.log('this is', response);
        this.dataSource = response;
        this.setState({
          function() {
            //this.arrayholder = this.dataSource;

          },
        });
        this.arrayholder = this.dataSource;
        console.log('this is array', this.dataSource);
      })
      .then(responseJson => {
        //console.log(responseJson)
        this.setState(
          {
            isLoading: false,
            //dataSource: responseJson,
          },
          function() {
            // this.arrayholder = responseJson;
            // console.log('this is array',this.arrayholder);
          }
        );
        console.log('kkk', this.arrayholder);
      })
      .catch(error => {
        console.error(error);
        console.log('errorr why?????');
      })
  );

}

_renderItem = ({ item }) => (

  //  <TouchableHighlight onPress={() => {this.onPress(item).bind(this)}}>
    <View>
          <Text>{item.Store_n}  ::::    {item.desc}</Text>
          <Image source={{uri:item.url}} style={styles.photo} resizeMode='cover'></Image>
          </View>
  //  </TouchableHighlight>
);

render() {
  console.warn(this.obj);
  return (
    <SafeAreaView style={{ marginTop: 50, flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.value(text, 'name')}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <TouchableHighlight
          onPress={() => this.submitAction()}
          style={styles.register}>
          <Text>Submit</Text>
        </TouchableHighlight>
        <View style={styles.case2}>
          <Separator />
          <Text>{this.state.email}</Text>
          <FlatList
            data={this.arrayholder}
            renderItem={this._renderItem}
            style={{ marginTop: 10 }}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
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
  backgroundColor: 'white',
},
case2: {
  flex: 3,
  backgroundColor: 'white',
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
register: {
  backgroundColor: 'rgb(200,174,198)',
  padding: 10,
  marginTop: 20,
  borderRadius: 30,
},
  photo:{
  width: 180,
  height: 180,
  marginHorizontal: 10,
},
});

AppRegistry.registerComponent('Give', () => Give);
