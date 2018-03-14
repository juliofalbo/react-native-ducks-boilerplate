import React from 'react';
import { StyleSheet, Alert, View, Text, TextInput } from 'react-native';

export default class Login extends React.PureComponent {
  render () {
    const { navigation, update, login, username, password, loading } = this.props;
    console.log(this.props);
    return (
      <View>
          <Text>Login</Text>

          <TextInput
            placeholderTextColor={'rgba(112, 112, 112, 0.5)'}
            underlineColorAndroid={'rgba(0, 0, 0, 0)'}
            placeholder={'Senha'}
            keyboardType={'numeric'}
            onChangeText={password => update({ password })}
            value={password}
          />
      </View>
    )
  }
}
