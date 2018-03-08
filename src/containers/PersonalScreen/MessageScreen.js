import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const SystemMessage = () => <View><Text>SystemMessage</Text></View>;
const Topic = () => <View><Text>Topic</Text></View>;
const Exhibition = () => <View><Text>Exhibition</Text></View>;

class MessageScreen extends Component {
  render () {
    return (
      <ScrollableTabView
        style={styles.container}
        tabBarUnderlineStyle={styles.underline}
      >
        <SystemMessage tabLabel='系统消息' />
        <Topic tabLabel='话题动态' />
        <Exhibition tabLabel='展览动态' />
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  underline: {
    backgroundColor: '#000'
  }
});

export default MessageScreen;
