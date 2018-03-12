import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import PropTypes from 'prop-types';

const settingsList = [
  {
    key: 1,
    title: '消息推送'
  },
  {
    key: 2,
    title: '清楚缓存'
  },
  {
    key: 3,
    title: '修改密码',
    screen: 'PwdModifying'
  },
  {
    key: 4,
    title: '关于我们',
    screen: 'AboutUs'
  },
  {
    key: 5,
    title: '退出登录'
  }
];

class SettingsScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={settingsList}
          renderItem={
            ({item, i}) => (
              <ListItem
                key={i}
                title={item.title}
                titleStyle={{color: '#000'}}
                onPress={() => this.props.navigation.navigate('PwdModifying')}
              />
            )
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

SettingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SettingsScreen;
