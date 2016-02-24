// i dont think we should use immutable for this because lodash clone shouldnt be that expensive.
import {Dimensions} from 'react-native';
const {width} = Dimensions.get("window")
const deviceType = width > 750 ? "tablet": "phone";
const adMobUnitId = "ca-app-pub-7393462688693977/9471774043"; 
const initialState = {appName: "React Native Starter App", deviceType, width, adMobUnitId};

export default function settings(state = initialState, action) {
  return state;
}