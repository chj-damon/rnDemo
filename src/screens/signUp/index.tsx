import React from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { onSignIn } from '../../auth';
import { NavigationScreenProps } from 'react-navigation';

export default ({ navigation }: NavigationScreenProps) => (
  <View style={{ paddingVertical: 20 }}>
    <Text>Email</Text>
    <TextInput placeholder="Email address..." />
    <Text>Password</Text>
    <TextInput secureTextEntry placeholder="Password..." />
    <Text>Confirm Password</Text>
    <TextInput secureTextEntry placeholder="Confirm Password..." />

    <Button
      title="注册"
      onPress={() => {
        onSignIn().then(() => navigation.navigate('SignedIn'));
      }}
    />
    <Button title="登录" onPress={() => navigation.navigate('SignIn')} />
  </View>
);
