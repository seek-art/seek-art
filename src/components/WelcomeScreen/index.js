import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import PropTypes from 'prop-types';

class WelcomeScreen extends Component {
  componentDidMount () {
    setTimeout(() => {
      this.props.navigation.navigate('SignIn');
    }, 1000);
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
        <Text h3 style={styles.title}>寻艺</Text>
        <Text style={styles.subtitle}>一个高品质的展会平台</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'
  },
  avatar: {
    marginTop: 70
  },
  title: {
    marginTop: 16
  },
  subtitle: {
    marginTop: 20,
    color: '#a5a0a0'
  }
});

WelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default WelcomeScreen;
