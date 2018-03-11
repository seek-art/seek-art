import React from 'react';
import HomeScreen from './src/containers/HomeScreen';
import CommunityScreen from './src/containers/CommunityScreen';
import MallScreen from './src/containers/MallScreen';
import PersonalScreen from './src/containers/PersonalScreen';
import PersonalProfile from './src/containers/PersonalScreen/PersonalProfile';
import CompanyScreen from './src/containers/HomeScreen/Company/CompanyScreen';
import CreateExhibitionScreen from './src/containers/HomeScreen/Exhibition/CreateExhibitionScreen';
import TemplatesScreen from './src/containers/HomeScreen/Exhibition/TemplatesScreen';
import TemplateDetail from './src/containers/HomeScreen/Exhibition/TemplateDetail';
import CompanyDetail from './src/components/CompanyDetail';
import SignInScreen from './src/containers/SignInScreen';
import WelcomeScreen from './src/components/WelcomeScreen';
import MessageScreen from './src/containers/PersonalScreen/MessageScreen';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { Icon } from 'react-native-elements';

const HomeStack = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      tabBarVisible: false,
      header: null
    }
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      tabBarVisible: false,
      header: null
    }
  },
  Home: {
    screen: HomeScreen
  },
  Company: {
    screen: CompanyScreen
  },
  CompanyDetail: {
    screen: CompanyDetail,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  CreateExhibition: {
    screen: CreateExhibitionScreen
  },
  Templates: {
    screen: TemplatesScreen
  },
  TemplateDetail: {
    screen: TemplateDetail,
    navigationOptions: {
      tabBarVisible: false
    }
  }
});

const PersonalStack = StackNavigator({
  Personal: {
    screen: PersonalScreen
  },
  Message: {
    screen: MessageScreen
  },
  PersonalProfile: {
    screen: PersonalProfile
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
    screen: PersonalStack
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
          icon: <Icon size={24} color='#000' name='home' />,
          label: '首页',
          barBackgroundColor: '#fff'
        },
        Community: {
          icon: <Icon size={24} color='#000' name='forum' />,
          label: '社区',
          barBackgroundColor: '#fff'
        },
        Store: {
          icon: <Icon size={24} color='#000' name='store' />,
          label: '商场',
          barBackgroundColor: '#fff'
        },
        Personal: {
          icon: <Icon size={24} color='#000' name='account-circle' />,
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
