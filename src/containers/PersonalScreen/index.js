import React, {Component} from 'react';
import {View, StyleSheet, Image, FlatList, TouchableWithoutFeedback} from 'react-native';
import {ListItem, Avatar, Text, Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

const settingsList = [
  {
    key: 1,
    title: '展览',
    screen: 'exihibition'
  },
  {
    key: 2,
    title: '作品',
    screen: 'works'
  },
  {
    key: 3,
    title: '钱包',
    screen: 'wallet'
  },
  {
    key: 4,
    title: '直播',
    screen: 'zhibo'
  },
  {
    key: 5,
    title: '话题',
    screen: 'huati'
  },
  {
    key: 6,
    title: '我的活动',
    screen: 'exihibition'
  },
  {
    key: 7,
    title: '定制展览',
    screen: 'dingzhi'
  },
  {
    key: 8,
    title: '订单',
    screen: 'orders'
  },
  {
    key: 'Settings',
    title: '设置',
    screen: 'Settings'
  }
];

class PersonalScreen extends Component {
  onPressMessageBtn = () => {
    this.props.navigation.navigate('Message');
  }
  onPressPersonalInfo = () => {
    this.props.navigation.navigate('PersonalProfile');
  }
  render () {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.onPressPersonalInfo}>
          <View style={styles.userInfo}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            >
              <Image
                style={{
                  flex: 1
                }}
                source={{uri: 'https://s15.postimg.org/tw2qkvmcb/400px.png'}}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Avatar
                width={110}
                height={110}
                rounded
                source={require('../../images/logo.png')}
                containerStyle={styles.avatar}
                overlayContainerStyle={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
                activeOpacity={0.7}
              />
              <View>
                <Text h4>
                  琪琪
                </Text>
                <Text style={styles.id}>
                  id: 0100
                </Text>
              </View>
            </View>
            <Icon name='keyboard-arrow-right' color='#858585' iconStyle={{marginRight: 10}} />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.userStatics}>
          <TouchableWithoutFeedback>
            <View style={styles.userStaticsItem}>
              <Text>69</Text>
              <Text>关注</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.userStaticsItem}>
              <Text>78</Text>
              <Text>粉丝</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.onPressMessageBtn}>
            <View style={styles.userStaticsItem}>
              <Text>35</Text>
              <Text>消息</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={settingsList}
            renderItem={
              ({item, i}) => (
                <ListItem
                  key={item.key}
                  title={item.title}
                  titleStyle={{color: '#000'}}
                  onPress={() => this.props.navigation.navigate(item.screen)} />
              )
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea'
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {
    margin: 20
  },
  id: {
    marginTop: 25,
    color: '#858585'
  },
  userStatics: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff'
  },
  userStaticsItem: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff'
  }
});

PersonalScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default PersonalScreen;
