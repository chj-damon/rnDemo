import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { onSignIn } from '../../auth';
import { NavigationScreenProps } from 'react-navigation';

export default ({ navigation }: NavigationScreenProps) => (
  <View style={{ paddingVertical: 20 }}>
    <Text>Email</Text>
    <TextInput placeholder="Email address..." />
    <Text>Password</Text>
    <TextInput secureTextEntry placeholder="Password..." />

    <Button
      title="登录"
      onPress={() => {
        onSignIn().then(() => navigation.navigate('Profile'));
      }}
    />
    <Button title="注册" onPress={() => navigation.navigate('SignUp')} />
  </View>
);
