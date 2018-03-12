import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import t from 'tcomb-form-native';
import PropTypes from 'prop-types';

const Form = t.form.Form;

const ExhibitionForm = t.struct({
  length: t.Number,
  width: t.Number,
  height: t.Number,
  theme: t.enums({
    M: '阳光海滩',
    F: '森林幽径'
  }),
  type: t.enums({
    M: '阳光海滩',
    F: '森林幽径'
  })
});

const options = {
  fields: {
    length: {
      label: '长'
    },
    width: {
      label: '宽'
    },
    height: {
      label: '高'
    },
    theme: {
      label: '主题'
    },
    type: {
      label: '展品类型'
    }
  }
};

class CreateExhibitionScreen extends Component {
  state = {
    form: {
      length: '',
      width: '',
      height: ''
    }
  }
  static navigationOptions = {
    title: '申请',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
  onPress = () => {
    const value = this.refs.form.getValue();
    if (value) console.log(value);
    this.props.navigation.navigate('Templates');
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Form
            ref='form'
            type={ExhibitionForm}
            options={options}
          />
          <Button
            title='下一步'
            onPress={this.onPress}
            textStyle={{ color: '#fff', fontWeight: '700' }}
            buttonStyle={{
              backgroundColor: '#000',
              height: 45,
              borderColor: 'transparent',
              alignSelf: 'stretch',
              borderWidth: 0
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    padding: 20
  }
});

CreateExhibitionScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default CreateExhibitionScreen;
