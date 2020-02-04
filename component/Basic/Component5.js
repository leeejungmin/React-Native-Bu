/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry, Text, View, FlatList, StyleSheet, TextInput, TouchableHighlight} from 'react-native';


export default class Component5 extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: false, text: ''};
    this.arrayholder = [];
    this.isLoadings = 'this is working';
  }

// fecth
componentDidMount(){
  //return fetch('https://jsonplaceholder.typicode.com/users')
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
      }, function(){
        this.arrayholder = responseJson.movies;
      });

    })
    .catch((error) =>{
      console.error(error);
    });
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
ListViewItemSeparator = () => {
  //Item sparator view
  return (
    <View
      style={{
        height: 0.3,
        width: '90%',
        backgroundColor: '#080808',
      }}
    />
  );
};

    _renderItem = ({item}) => (

    //  <TouchableHighlight onPress={() => {this.onPress(item).bind(this)}}>
      <View style= {{flex: 1, padding: 20}} >
        //<Text >{item.name} 'is running ther business' {item.company.name} </Text>
        <Text >{item.title} 'is running ther business' {item.releaseYear} </Text>
      </View>
    //  </TouchableHighlight>
  );

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
        <Text>{this.state.isLoadings}</Text>
        </View>
      )
    }

    return(
        <View >
      <Text>  'gooododo'</Text>
          <TextInput
         style={styles.textInputStyle}
         onChangeText={text => this.SearchFilterFunction(text)}
         value={this.state.text}
         underlineColorAndroid="transparent"
         placeholder="Search Here"
       />

          <FlatList
            data={this.state.dataSource}
            renderItem={this._renderItem}
            style={{ marginTop: 10 }}
            keyExtractor={item => item.id.toString()}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:5,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    color: 'black'
  },
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
})
AppRegistry.registerComponent('Component5', () => Component5);
//AppRegistry.registerComponent(appName, () => App);
