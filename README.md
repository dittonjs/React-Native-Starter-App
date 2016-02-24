React Native Starter App
=======

A starting point for react native apps.

Setup
=====

### Node
Uses node v5.1.0

In the project directory run `npm install`

### iOS Setup
1. Open the XCode project in the ios folder
2. Click on your project in the project viewer
3. Click on `Build Phases`
4. Open the `Bundle React Native code and images` section.
5. If you are using NVM replace the shell script with the following
```
export NODE_BINARY=<absolute path to your node version>
../node_modules/react-native/packager/react-native-xcode.sh
```
You can find the path to your node version 5.1.0 installation by doing:
```
nvm use 5.1.0
which node
```

If you are using a standard installation of node you can replace the shell script with the following.
```
export NODE_BINARY=node
../node_modules/react-native/packager/react-native-xcode.sh
```

6. Do `npm start` to start the Javascript Server
7. Run the app by doing `react-native run-ios` or by opening the ios project in XCode and clicking run. 

I prefer to run the project from XCode so you can change the device type with ease. You will also need to have react-native-cli installed globally to run from the command line.

### Android Setup
Coming soon.

### Running on iOS device
1. Open up AppDelegate.m in Xcode.
2. On line 34 change where to says `localhost` to your ip address.
3. With your device plugged in select your device from the list of devices next to the play button
4. Push run.

You will need to go into your settings on your device and allow developer created apps.

Notes
=====



