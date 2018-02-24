import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Text, Icon } from 'react-native-elements';


const cardWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
};

export default class ExhibitionCard extends Component {
  render() {
    return (
      <Card
        wrapperStyle={cardWrapperStyle}
        image={require('../../images/cup.png')}>
        <Text style={{marginBottom: 10}}>
          艺·无界 | 北京
        </Text>
        <Text>
          VlalalalalalaVlalalalalalaVlalalalalalaVlalalalalala
        </Text>
        <View style={{
          marginTop: 30,
          alignSelf: 'flex-end',      
          display: 'flex',
          flexDirection: 'row'
        }}>
          <Icon name='favorite-border'/>
          <Icon name='comment' style={{}}/>
          <Icon name='share' type='material-community'/>
        </View>
      </Card>
    );
  }
}
