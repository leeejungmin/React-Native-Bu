/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry, Text, View, FlatList, StyleSheet, SafeAreaView} from 'react-native';
//import ListView from 'deprecated-react-native-listview';
//import {name as appName} from './app.json';
const users = [
  {id:'1',name: 'Lee', apear: 'nice'},
  {id:'2',name: 'Jung', apear: 'good'},
  {id:'3',name: 'Min', apear: 'handsome'},
]
function Item({ name }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}
export default class Component4 extends Component {
  constructor(){
    super();
  //const ds =  new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      //userDataSource: ds.cloneWithRows(users
      datas:  [
        {id:'1',name: 'Lee', apear: 'nice'},
        {id:'2',name: 'Jung', apear: 'good'},
        {id:'3',name: 'Min', apear: 'handsome'},
      ]
    };
  }
  _renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name} {item.apear}</Text>
    </View>
    );

  render() {
    return (
        <FlatList
          //data={this.state.datas}
          data = {users}
          //renderItem={({ item }) => <Item title={item.name} />}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
        />
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
    fontSize: 32,
    color: 'black'
  },
})
AppRegistry.registerComponent('Component4', () => Component4);
//AppRegistry.registerComponent(appName, () => App);
