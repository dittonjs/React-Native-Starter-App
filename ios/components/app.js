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
import {connect}            from 'react-redux';
import * as CounterActions  from "../../actions/counter";
import MaterialIcon         from 'react-native-vector-icons/MaterialIcons';

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
        backgroundColor: "rgb(5,165,209)",
        padding: tablet? 40 : 20,
        borderRadius: tablet ? 70 : 35,
        shadowColor: "grey",
        shadowRadius: 5,
        shadowOffset: {width: 2, height: 2},
        width: tablet? 140 : 70,
        height: tablet? 140: 70,
        margin: tablet ? 10 : 5,
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
            <TouchableHighlight style={styles.button} underlayColor={"rgba(5,165,209,.8)"} onPress={this.props.decrement}>
              <MaterialIcon color="white" size={this.props.deviceType == "tablet" ? 60 : 30} name="remove"/>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} underlayColor={"rgba(5,165,209,.8)"} onPress={this.props.increment}>
              <MaterialIcon color="white" size={this.props.deviceType == "tablet" ? 60 : 30} name="add"/>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
export default connect(select, {...CounterActions})(App)

