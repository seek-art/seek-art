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
    key: 9,
    title: '设置',
    screen: 'settings'
  }
];

class PersonalScreen extends Component {
  onPressMessageBtn = () => {
    this.props.navigation.navigate('Message');
  };

  render () {
    return (
      <View style={styles.container}>
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
        <View style={styles.userStatics}>
          <TouchableWithoutFeedback style={styles.userStaticsItem}>
            <View>
              <Text>69</Text>
              <Text>关注</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.userStaticsItem}>
            <View>
              <Text>78</Text>
              <Text>粉丝</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.userStaticsItem} onPress={this.onPressMessageBtn}>
            <View>
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
                <ListItem key={i} title={item.title} titleStyle={{color: '#000'}} />
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
