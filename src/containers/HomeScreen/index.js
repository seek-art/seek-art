import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import ExhibitionList from '../../components/ExhibitionList';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const dataCarousel = [
  {
    id: 339964,
    title: 'Valerian and the City of a Thousand Planets',
    imagePath: 'https://image.tmdb.org/t/p/w780/o6OhxtsgMurL4h68Uqei0aSPMNr.jpg'
  },
  {
    id: 315635,
    imagePath: 'https://image.tmdb.org/t/p/w780/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg'
  },
  {
    id: 339403,
    title: 'Baby Driver',
    subtitle: 'More than just a trend',
    imagePath: 'https://image.tmdb.org/t/p/w780/xWPXlLKSLGUNYzPqxDyhfij7bBi.jpg'
  }
];

const actions = [{
  text: '办展',
  icon: { uri: 'https://www.materialui.co/materialIcons/action/account_circle_grey_192x192.png' },
  name: 'bt_accessibility',
  position: 2
}, {
  text: '观展',
  icon: { uri: 'https://www.materialui.co/materialIcons/action/account_circle_grey_192x192.png' },
  name: 'bt_language',
  position: 1
}, {
  text: 'VR',
  icon: { uri: 'https://www.materialui.co/materialIcons/action/account_circle_grey_192x192.png' },
  name: 'bt_room',
  position: 3
}, {
  text: '企业文化',
  icon: { uri: 'https://www.materialui.co/materialIcons/action/account_circle_grey_192x192.png' },
  name: 'company',
  position: 4
}];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: () => (<Icon size={24} color="white" name="home" />)
  }
  render () {
    return (
      <View style={styles.container}>
        <SwipeableParallaxCarousel
          data={dataCarousel}
          navigation
          titleColor='#fff'
        />
        <ExhibitionList />
        <FloatingAction
          actions={actions}
          onPressItem={
            (name) => {
              switch (name) {
                case ('company'):
                  this.props.navigation.navigate('Company');
                  break;
                default:
                  break;
              }
            }
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};