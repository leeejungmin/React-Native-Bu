
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

export default class Test1 extends Component {
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

 AppRegistry.registerComponent('Test1', () => Test1);

  
