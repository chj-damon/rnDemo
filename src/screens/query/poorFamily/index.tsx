/*
 * @文件描述: 查询-贫困户查询
 * @公司: thundersdata
 * @作者: 陈杰
 * @LastEditors: 陈杰
 * @Date: 2019-04-07 13:34:07
 * @LastEditTime: 2019-04-22 17:00:45
 */
import React from 'react';
import { Text, Button } from 'react-native';
import { NavigationScreenProps, SafeAreaView } from 'react-navigation';

export default ({ navigation }: NavigationScreenProps) => {
  return (
    <SafeAreaView>
      <Text>贫困户查询</Text>
      <Button
        title="打开详情页"
        onPress={() => navigation.navigate('FamilyDetail')}
      />
    </SafeAreaView>
  );
};
