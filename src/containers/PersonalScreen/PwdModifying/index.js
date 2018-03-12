import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const PwdForm = t.struct({
  password: t.String,
  rePassword: t.String
});

const formOptions = {
  auto: 'none',
  fields: {
    password: {
      placeholder: '请输入新密码（不少于6位数）'
    },
    rePassword: {
      placeholder: '请再次输入密码'
    }
  }
};

class PwdModifying extends Component {
  static navigationOptions = {
    title: '修改密码',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Form
          ref='form'
          type={PwdForm}
          options={formOptions}
        />
        <Button
          title='提交'
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    paddingBottom: 0
  }
});

export default PwdModifying;
