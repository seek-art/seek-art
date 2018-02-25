import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, Button, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

class SignInScreen extends Component {
  toHomeScreen = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })]
    });
    this.props.navigation.dispatch(resetAction);
  }
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
            marginTop: 35
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
        <View style={styles.divider}>
          <View style={styles.horizontalLine} />
          <Text>使用其他账号登录</Text>
          <View style={styles.horizontalLine} />
        </View>
        <View style={styles.socialList}>
          <Icon
            iconStyle={styles.socialIcon}
            name='qq'
            type='font-awesome'
          />
          <Icon
            iconStyle={styles.socialIcon}
            name='weixin'
            type='font-awesome'
          />
          <Icon
            iconStyle={styles.socialIcon}
            name='weibo'
            type='font-awesome'
          />
        </View>
        <Button
          textStyle={{ color: '#858585' }}
          buttonStyle={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            marginTop: 100
          }}
          title='稍后注册>'
          onPress={this.toHomeScreen}
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
  },
  divider: {
    marginTop: 40,
    flexDirection: 'row'
  },
  horizontalLine: {
    borderWidth: 0.5,
    height: 1,
    width: 80,
    borderColor: 'black',
    margin: 10
  },
  socialList: {
    marginTop: 30,
    flexDirection: 'row'
  },
  socialIcon: {
    marginLeft: 20,
    marginRight: 20
  }
});

SignInScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SignInScreen;
