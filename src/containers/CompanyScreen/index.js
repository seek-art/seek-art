import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';

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
  },{
    key: ',',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },{
    key: 'm',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },{
    key: 'n',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },{
    key: 'b',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },{
    key: 'v',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },{
    key: 'c',
    name: 'Tecent',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
];

class CompanyScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <List>
          <FlatList
            data={list}
            renderItem={
              ({item, i}) => (
                <ListItem
                  key={i}
                  title={item.name}
                  subtitle={item.subtitle}
                  avatar={{ uri: item.avatar_url }}
                  containerStyle={{}}
                  subtitleNumberOfLines={2}
                  avatarStyle={{ height: 50, width: 80 }}
                  avatarContainerStyle={{ height: 50, width: 80 }}
                />
              )
            }
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
})

export default CompanyScreen;
