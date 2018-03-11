import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';

const list = [
  {
    key: 'tech',
    name: '酷炫的科技风',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
  },
  {
    key: 't',
    name: '酷炫的科技风',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
  },
  {
    key: 'ech',
    name: '酷炫的科技风',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
  }
];

class TemplatesScreen extends Component {
  static navigationOptions = {
    title: '模板推荐',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
  itemOnPress = () => {
    this.props.navigation.navigate('TemplateDetail');
  }
  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={
            ({item, i}) => (
              <ListItem
                key={item.key}
                onPress={this.itemOnPress}
                title={item.name}
                avatar={{uri: item.avatar_url}}
                containerStyle={{backgroundColor: '#fff'}}
                avatarStyle={{height: 100, width: 180}}
                avatarContainerStyle={{height: 100, width: 180}}
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
    flex: 1
  }
});

TemplatesScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default TemplatesScreen;
