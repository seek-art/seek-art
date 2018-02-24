import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class PersonalScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: () => (<Icon size={24} color="white" name="account-circle" />)
  }
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Personal Screen</Text>
      </View>
    );
  }
}

export default PersonalScreen;
