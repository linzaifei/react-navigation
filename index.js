import { AppRegistry ,YellowBox} from 'react-native';
import App from './App';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import Index from './src/index'
AppRegistry.registerComponent('tabBar', () => Index);
