mport React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet

} from "react-native";
import Client from './Client.js';



class App extends Component {

  constructor() {
    super()
    this.state = {
      users: [] // user에 대한 정보를 담기 위한 state
    }
    this.handleUserInputChange = this.handleUserInputChange.bind(this)
  }

  componentWillMount = () => {
    this.getUser()
  }

  handleUserInputChange = event => {
    const {target: {name, value}} = event
    this.setState({
      [name]: value
    });
  }

  getUser = async() => {
    Client.search('User') // Client.js에서
    .then(data => {
      this.setState({
        users: data
      })
    })
  }

  submitUser = () => {
    const data = {
      "$class": "org.acme.model.User",
      "phonenumber": this.state.phonenumber,
      "email": this.state.email,
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,

    }

    Client.create('User', data)
    .then(() => {
      this.getUser()
    })
  }

  render() {
    return(
      <View className="App">
        <Text>Add User</Text>
        <Text>phonenumber:</Text>
        <TextInput
          onChange={this.handleUserInputChange}
          type="text"
          name="phonenumber" />
        <Text>email:</Text>
        <TextInput
          onChange={this.handleUserInputChange}
          type="text"
          name="email" />
        <Text>firstName:</Text>
        <TextInput
          onChange={this.handleUserInputChange}
          type="text"
          name="firstName" />
        <Text>lastName:</Text>
        <TextInput
          onChange={this.handleUserInputChange}
          type="text"
          name="lastName" />

        <Button title="New User" onPress={()=> this.submitUser}/>



        <View style={styles.container}>
          <Text style={styles.userlist}>
            User List
          </Text>
          {this.state.users.map((r, i) => (
            <View style={styles.userstate}
                  key={i}>
          <Text>phonenumber: {r.phonenumber}</Text>
          <Text>email: {r.email}</Text>
          <Text>firstName: {r.firstName}</Text>
          <Text>lastName: {r.lastName}</Text>
        </View>
          ))}
      </View>
    </View>
    )
  }
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  userlist:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  userstate:{
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
