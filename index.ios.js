/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator
} from 'react-native';
import App          from "./ios/components/app.js";
import { Provider } from "react-redux";
import configureStore from "./store/configure_store";
const store = configureStore({});
class Index extends Component {
  renderScene(route, navigator){
    return <route.component name={route.name} navigator={navigator} {...route.props} />
  }
  render() {
    return (
    <Provider store={store}>
      <Navigator 
        initialRoute={{name:"App", component: App, props: {}}}
        configureScene={()=>(Navigator.SceneConfigs.FloatFromRight)}
        renderScene={this.renderScene}
      />
    </Provider>
    )
  }
}

AppRegistry.registerComponent('react_native_starter_app', () => Index);
