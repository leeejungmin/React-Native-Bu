
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
  TouchableHighlight
} from 'react-native';
const obj = { name: "John", age: 30, email: "New York@gmail.com" };
export default class Give extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false, text: '', name:'', email:'ljm3453@gmail.com'};
    this.arrayholder = [];
  }

  submitAction(){
  return fetch('http://192.168.25.16:3000/jsonss',
  {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
    //'Access-Control-Allow-Origin':'*',
    'Content-Type':'application/json',
    'Accept': 'application/json',
  }})
  //return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((response) => {console.log('this is',response);
    this.dataSource = response;
    this.setState({function(){
        this.dataSource = response;
       // console.log('this is array',this.arrayholder);
      }});

         console.log('this is array',this.dataSource);
    })
    .then((responseJson) => {
      //console.log(responseJson)
      this.setState({
        isLoading: false,
        //dataSource: responseJson,
      }, function(){
       // this.arrayholder = responseJson;
       // console.log('this is array',this.arrayholder);
      });
      console.log('kkk',this.dataSource);
    })
    .catch((error) =>{
      console.error(error);
      console.log('errorr');
    });
  }
  //<Text >{item.title} 'is running ther business' {item.releaseYear} </Text>
  _renderItem = ({item}) => (

  //  <TouchableHighlight onPress={() => {this.onPress(item).bind(this)}}>
    <View style= {{flex: 1, padding: 20}} >
      <Text >{item.email} 'is running ther business'  </Text>
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
          onChangeText={text => this.value(text, 'name')}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <TouchableHighlight onPress={()=>this.submitAction()}
        style={styles.register}  >
          <Text>Submit</Text>
        </TouchableHighlight>
         <View style={styles.case2}>
         <Separator />
          <Text>{this.state.dataSource}</Text>
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
   register:{
   //justifyContent: 'flex-end',
                           backgroundColor: 'rgb(200,174,198)',
                           padding: 10,
                           marginTop: 20,
                           borderRadius: 30
 }
 });

 AppRegistry.registerComponent('Give', () => Give);
