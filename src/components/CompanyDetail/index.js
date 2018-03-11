import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Carousel from 'react-native-smart-carousel';
import { Button } from 'react-native-elements';

const dataCarousel = [
  {
    id: 339964,
    imagePath: 'https://image.tmdb.org/t/p/w780/o6OhxtsgMurL4h68Uqei0aSPMNr.jpg'
  },
  {
    id: 339403,
    imagePath: 'https://image.tmdb.org/t/p/w780/xWPXlLKSLGUNYzPqxDyhfij7bBi.jpg'
  }
];

class CompanyDetail extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Carousel
          data={dataCarousel}
          navigation
          titleColor='#fff'
        />
        <ScrollView>
          <Text style={styles.content}>hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello</Text>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button
            title='模拟场景'
            textStyle={{ color: '#fff', fontWeight: '700' }}
            buttonStyle={{
              backgroundColor: '#000',
              width: 130,
              height: 30,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 5
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonContainer: {
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#fff'
  }
});

export default CompanyDetail;
