/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  Platform,
  Component,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import * as CounterActions from "../../actions/counter";

const select = (state, context)=>{
  return {
    appName: state.settings.appName,
    deviceType:  state.settings.deviceType,
    width: state.settings.width,
    count: state.counter.count
  }
}


class App extends Component {
  getStyles(){
    const tablet = this.props.deviceType == "tablet";
    return StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5FCFF'
      },
      welcome: {
        fontSize: tablet? 40 : 20,
        textAlign: 'center',
        margin: 10
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
      },
      button: {
        color: "white",
        backgroundColor: "#05a5d1",
        padding: tablet? 20 : 10,
        borderRadius: 4,
        shadowColor: "grey",
        shadowRadius: 5,
        width: tablet? 200 : 100,
        textAlign: "center",
        margin: tablet ? 10 : 5,
        fontSize: tablet ? 30 : 15
      },
      main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      },
      count: {
        fontSize: tablet ? 400 : 200
      },
      buttons: {
        flexDirection: "row",
      }
    });
  }
  render() {
    console.log(this.props.width);
    console.log(this.props.deviceType);
    const styles = this.getStyles();
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.appName}</Text>
        <View style={styles.main}>
          <Text style={styles.count}>{this.props.count}</Text>
          <View style={styles.buttons}>
            <TouchableHighlight underlayColor={"#F5FCFF"} onPress={this.props.increment}>
              <Text style={styles.button}>Increment</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={"#F5FCFF"} onPress={this.props.decrement}>
              <Text style={styles.button}>Decrement</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
export default connect(select, {...CounterActions})(App)

