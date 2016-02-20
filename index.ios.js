/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import _ from "./node_modules/lodash/index.js";

class react_native_starter_app extends Component {
  constructor(){
    super()
  }
  componentDidMount(){
    fetch('https://api.github.com/users/dittonjs') // use fetch for network requests.
    .then((res)=>{
      return res.json();
    }).then((json)=>{
      console.log(json);
      console.log(process.env);
    });
  }
  render() {
    let messages = ["React Native", "Starter", "App"];
    let messageDisplays = _.map(messages,(message)=>{
      return <Text key={message} style={styles.welcome}>{message}</Text>
    });
    return (
      <View style={styles.container}>
      {messageDisplays}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('react_native_starter_app', () => react_native_starter_app);
