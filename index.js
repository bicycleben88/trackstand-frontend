import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import withData from './lib/withData';

AppRegistry.registerComponent(appName, () => withData(App));
