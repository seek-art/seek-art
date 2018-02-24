import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class CommunityScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '社区',
    tabBarIcon: () => (<Icon size={24} color="white" name="forum" />)
  }
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export default CommunityScreen;
