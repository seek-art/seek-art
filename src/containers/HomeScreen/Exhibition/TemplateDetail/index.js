import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Text, Button } from 'react-native-elements';

const { width } = Dimensions.get('window');

class TemplateDetail extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image
          resizeMode='contain'
          source={{ uri: 'https://cdn-images-1.medium.com/max/1000/1*XaGxIa_JuHc8YTR5Znv6tg.png' }}
          style={styles.image}
        />
        <View style={styles.content}>
          <ScrollView>
            <Text h4 style={styles.contentTitle}>
              酷炫科技风
            </Text>
            <Text>
              酷炫科技风酷炫科技风酷炫科技风酷炫科技风酷炫科技风酷炫科技风
            </Text>
          </ScrollView>
        </View>
        <View style={styles.content}>
          <Text h4 style={styles.contentTitle}>
            预先添加展品
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='完成'
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
    flex: 1
  },
  image: {
    height: 210,
    left: 0,
    right: 0
  },
  content: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  contentTitle: {
    marginBottom: 10
  },
  buttonContainer: {
    position: 'absolute',
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: width,
    backgroundColor: '#fff',
    bottom: 0
  }
});

export default TemplateDetail;
