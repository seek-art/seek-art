import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const ProfileForm = t.struct({
  nickName: t.String,
  gender: t.enums({
    male: '男',
    female: '女'
  }),
  birthday: t.Date,
  telephone: t.Number,
  email: t.String,
  bio: t.String
});

const formOptions = {
  fields: {
    nickName: {
      label: '昵称'
    },
    gender: {
      label: '性别'
    },
    birthday: {
      label: '生日'
    },
    telephone: {
      label: '手机'
    },
    email: {
      label: '邮箱'
    },
    bio: {
      label: '简介'
    }
  }
};

class PersonalProfile extends Component {
  onPress = () => {

  }
  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Form
            ref='form'
            type={ProfileForm}
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
        </ScrollView>
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

export default PersonalProfile;
