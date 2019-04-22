/*
 * @文件描述: 帮扶对象详情，包含四个tab页：基本信息、收入信息、帮扶信息、扶贫手册
 * @公司: thundersdata
 * @作者: 陈杰
 * @LastEditors: 陈杰
 * @Date: 2019-04-07 14:10:36
 * @LastEditTime: 2019-04-20 11:38:57
 */
import React from 'react';
import { View, Text } from 'react-native';

export default class FamilyDetail extends React.Component {
  static navigationOptions = {
    title: '详情'
  };
  render() {
    return (
      <View>
        <Text>帮扶对象详情页</Text>
      </View>
    );
  }
}
