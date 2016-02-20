React Native Starter App
=======

A starting point for react native apps.

Setup
=====

### Node
Uses node v4.0

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
You can find the path to your node version 4.0 installation by doing:
```
nvm use 4.0
which node
```

If you are using a standard installation of node you can replace the shell script with the following.
```
export NODE_BINARY=node
../node_modules/react-native/packager/react-native-xcode.sh
```

6. Do `npm start` to start the Javascript Server
7. Run the app by doing `react-native run-ios` or by opening the ios project in XCode and clicking run.

### Android Setup
Coming soon.

Notes
=====

There is a bug in React Native when imported node modules as a work around import external librarys like this:
```
// don't do this
import _ from "lodash"

// do this
import _ from "./node_modules/lodash/index.js"

// its annoying I know but it wont work otherwise.
```

