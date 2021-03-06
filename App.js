/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Navigator,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




import { createStackNavigator } from 'react-navigation-stack';
import Component2 from './component/Component2.js';
/*
import {createAppContainer, NavigationScreenProps } from 'react-navigation';
import Component1 from './component/Component1';
import Component3 from './component/Component3';
import Component4 from './component/Component4';
import Component5 from './component/Component5';
import Component6 from './component/Component6';
renderScene(route, navigator){
  switch (route.id) {
    case 'component5':
      return (<Component5 navigator={navigator} title="component5"/>)
    case 'component5':
      return (<Component6 user={route.user} navigator={navigator} title="component6"/>)

  }
}*/
/*
<Navigator
initialRoute={{id: 'component5'}}
renderScene={this.renderScene}
configureScreen={{route,routeStack} => Navigator.SceneConfigs.FloatFrombottom}
/>
<View>
  < Component5/>
</View>
*/

/*  <Navigator
  initialRoute={{id: 'component5'}}
  renderScene={this.renderScene}
  configureScreen={{route,routeStack} => Navigator.SceneConfigs.FloatFrombottom}
  />*/
  /*const App: () => React$Node = () => {
    return (
      <>
      <Navigator
      initialRoute={{id: 'component5'}}
      renderScene={this.renderScene}
      configureScreen={(route,routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    <View>
      < Component1 />
    </View>

    static navigationOptions = ({navigation}) => ({
    //  title: 'Home'
    })
    </>
  );
};*/
  class Home extends Component {

    render() {
      return (
        <View style={styles.container}>
          <Text> 'gooodddd Jung!!'</Text>
          <Button onPress = {() => this.props.navigation.navigate('Xbox')} title="Go to Test"></Button>
        </View>
      );
    }
  }
  class Test extends Component {

    render() {
      return (
        <View style={styles.container}>
          <Text> 'dddddddd Jung!!'</Text>
          <Button onPress = {() => this.props.navigation.navigate('Playstation')} title="Go to App"></Button>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

// create createStackNavigator
  /*
  navigationOptions:  {
  title: 'HomeisComming'
  export default  App;
}

  */
const RootStack = createStackNavigator({
  Playstation: { screen: Home, params: { product: 'Playstation' } },
  Xbox: { screen: Component2, params: { product: 'Xbox' } },
  });


const App = createAppContainer(RootStack);
//console.warn(App);
  export default  App ;
  //AppRegistry.registerComponent('Home', () => App);
