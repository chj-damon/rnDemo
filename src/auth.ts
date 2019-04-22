/*
 * @文件描述: 鉴权相关
 * @公司: thundersdata
 * @作者: 陈杰
 * @LastEditors: 陈杰
 * @Date: 2019-04-06 10:04:02
 * @LastEditTime: 2019-04-06 16:16:07
 */
import AsyncStorage from '@react-native-community/async-storage';

export const IS_SIGNEDIN = 'false';

export const onSignIn = () => AsyncStorage.setItem(IS_SIGNEDIN, 'true');

export const onSignOut = () => AsyncStorage.removeItem(IS_SIGNEDIN);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(IS_SIGNEDIN)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
