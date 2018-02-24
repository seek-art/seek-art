import React from 'react';
import HomeScreen from './src/containers/HomeScreen';
import CommunityScreen from './src/containers/CommunityScreen';
import MallScreen from './src/containers/MallScreen';
import PersonalScreen from './src/containers/PersonalScreen';
import CompanyScreen from './src/containers/CompanyScreen';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { NavigationComponent  } from 'react-native-material-bottom-navigation';

const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Company: {
    screen: CompanyScreen
  }
});

const Root = TabNavigator({
  首页: {
    screen: HomeStack
  },
  社区: {
    screen: CommunityScreen
  },
  商场: {
    screen: MallScreen
  },
  我的: {
    screen: PersonalScreen
  }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        首页: {
          barBackgroundColor: '#37474F'
        },
        社区: {
          barBackgroundColor: '#37474F'
        },
        商场: {
          barBackgroundColor: '#37474F'
        },
        我的: {
          barBackgroundColor: '#37474F'
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
