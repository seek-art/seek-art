import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, Button } from 'react-native-elements';

class SignInScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Avatar
          xlarge
          source={require('../../images/logo.png')}
          containerStyle={styles.avatar}
          overlayContainerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
          activeOpacity={0.7}
        />
        <Text h3>寻艺</Text>
        <Button
          title='手机号注册'
          textStyle={{ color: '#fff', fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: '#000',
            width: 220,
            height: 45,
            borderColor: 'transparent',
            borderWidth: 0,
            marginTop: 35,
          }}
        />
        <Button
          title='登录'
          textStyle={{ color: '#000', fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: '#fff',
            width: 220,
            height: 45,
            borderColor: '#000',
            borderWidth: 2,
            marginTop: 20
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column'
  },
  avatar: {
    marginTop: 60
  }
});

export default SignInScreen;
