
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
  AppRegistry
} from 'react-native';

export default class Receive extends Component {
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
  componentDidMount(){
  return fetch('http://192.168.25.28:3000/jsons',
  {
    method: 'GET',
    body: {    "first_name": 'good'   },
    headers: {
    'Access-Control-Allow-Origin':'*',
    'Content-Type':'application/json'
  }})
  //return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
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
      <Text >{item.name} 'is running ther business'  </Text>

    </View>
  //  </TouchableHighlight>
  );

  render() {
     console.warn('hiiiiddd');
     return (
       <SafeAreaView style={{marginTop:50, flex:1}}>
       <View style={styles.container}>
          <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
         <View style={styles.case2}>
         <Separator />

           <FlatList
             data={this.state.dataSource}
             renderItem={this._renderItem}
             style={{ marginTop: 10 }}
             keyExtractor={item => item.id.toString()}
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
 });

 AppRegistry.registerComponent('Receive', () => Receive);

  
