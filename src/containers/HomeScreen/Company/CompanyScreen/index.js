import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import PropTypes from 'prop-types';

const list = [
  {
    key: 'Alibaba',
    name: 'Alibaba',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    key: 'Tecent',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    key: 'a',
    name: 'Alibaba',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice PresidentVice President'
  },
  {
    key: 'r',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    key: '/',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    key: '.',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }, {
    key: ',',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }, {
    key: 'm',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }, {
    key: 'n',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }, {
    key: 'b',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }, {
    key: 'v',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }, {
    key: 'c',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
];

class CompanyScreen extends Component {
  itemOnPress = () => {
    this.props.navigation.navigate('CompanyDetail');
  };

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
                subtitle={item.subtitle}
                avatar={{uri: item.avatar_url}}
                containerStyle={{backgroundColor: '#fff'}}
                subtitleNumberOfLines={2}
                avatarStyle={{height: 50, width: 80}}
                avatarContainerStyle={{height: 50, width: 80}}
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

CompanyScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default CompanyScreen;
