import React from 'react';
import HomeScreen from './src/containers/HomeScreen';
import CommunityScreen from './src/containers/CommunityScreen';
import MallScreen from './src/containers/MallScreen';
import PersonalScreen from './src/containers/PersonalScreen';
import CompanyScreen from './src/containers/CompanyScreen';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { NavigationComponent  } from 'react-native-material-bottom-navigation';
import { Icon } from 'react-native-elements';

const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Company: {
    screen: CompanyScreen
  }
});

const Root = TabNavigator({
  Home: {
    screen: HomeStack
  },
  Community: {
    screen: CommunityScreen
  },
  Store: {
    screen: MallScreen
  },
  Personal: {
    screen: PersonalScreen
  }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: '#000',
      rippleColor: 'white',
      tabs: {
        Home: {
          icon: <Icon size={24} color="#000" name="home" />,
          label: '首页',
          barBackgroundColor: '#fff'
        },
        Community: {
          icon: <Icon size={24} color="#000" name="forum" />,
          label: '社区',
          barBackgroundColor: '#fff'
        },
        Store: {
          icon: <Icon size={24} color="#000" name="store" />,
          label: '商场',
          barBackgroundColor: '#fff'
        },
        Personal: {
          icon: <Icon size={24} color="#000" name="account-circle" />,
          label: '我的',
          barBackgroundColor: '#fff'
        }
      }
    }
  }
});

export default class App extends React.Component {
  render () {
    return <Root />;
  }
}
