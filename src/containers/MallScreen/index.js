import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class MallScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '商场',
    tabBarIcon: () => (<Icon size={24} color="white" name="store" />)
  }
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Mall Screen</Text>
      </View>
    );
  }
}

export default MallScreen;
