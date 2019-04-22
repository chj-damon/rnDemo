import React from 'react';
import { View, Text, Button } from 'react-native';
import { onSignOut } from '../../auth';
import { TabBarBottomProps } from 'react-navigation';

export default ({ navigation }: TabBarBottomProps) => (
  <View style={{ paddingVertical: 20 }}>
    <View
      style={{
        backgroundColor: '#bcbec1',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: 'center',
        marginBottom: 20
      }}
    >
      <Text style={{ color: 'white', fontSize: 28 }}>JD</Text>
    </View>
    <Button
      title="SIGN OUT"
      onPress={() => onSignOut().then(() => navigation.navigate('SignedOut'))}
    />
  </View>
);
