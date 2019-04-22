import React from 'react';
import { Platform, StatusBar } from 'react-native';
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  NavigationBottomTabScreenOptions,
  NavigationScreenProp,
  NavigationParams,
  NavigationState
} from 'react-navigation';
import SignUp from './screens/signUp';
import SignIn from './screens/signIn';
import Homepage from './screens/homepage';
import Profile from './screens/profile';
import PoorVillage from './screens/query/poorViliage';
import PoorFamily from './screens/query/poorFamily';
import HelpingProject from './screens/query/helpingProject';
import HelpingCadre from './screens/query/helpingCadre';
import FamilyDetail from './screens/familyDetail';
import QueryHeaderRight from './screens/query/components/QueryHeaderRight';

const headerStyle = {
  marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
};

export const MainTab = createBottomTabNavigator(
  {
    Home: {
      screen: Homepage,
      navigationOptions: {
        tabBarLabel: '首页'
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: '我的'
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }
    }
  }
);
MainTab.navigationOptions = ({
  navigation
}: {
  navigation: NavigationScreenProp<NavigationState>;
}) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  let headerTitle = '';

  switch (routeName) {
    case 'Home':
    default:
      headerTitle = '首页';
      break;
    case 'Profile':
      headerTitle = '个人中心';
      break;
  }
  return {
    headerTitle
  };
};

const QueryTab = createBottomTabNavigator({
  PoorVillage: {
    screen: PoorVillage
  },
  PoorFamily: {
    screen: PoorFamily
  },
  HelpingProject: {
    screen: HelpingProject
  },
  HelpingCadre: {
    screen: HelpingCadre
  }
});
QueryTab.navigationOptions = ({
  navigation
}: {
  navigation: NavigationScreenProp<NavigationState>;
}) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  let headerTitle = '';

  switch (routeName) {
    case 'PoorVillage':
    default:
      headerTitle = '贫困村';
      break;
    case 'PoorFamily':
      headerTitle = '贫困户';
      break;
    case 'HelpingProject':
      headerTitle = '扶贫项目';
      break;
    case 'HelpingCadre':
      headerTitle = '帮扶干部';
      break;
  }
  return {
    headerTitle,
    headerRight: <QueryHeaderRight />
  };
};

/** 已登录的页面栈 */
export const SignedIn = createStackNavigator(
  {
    Tab: {
      screen: MainTab
    },
    Query: {
      screen: QueryTab
    },
    FamilyDetail: {
      screen: FamilyDetail
    }
  },
  {
    navigationOptions: {
      headerBackTitle: null
    }
  }
);

/** 未登录的页面栈 */
export const SignedOut = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: '登录',
      headerStyle
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: '注册',
      headerStyle
    }
  }
});

export const createRootNavigator = (signedIn = false) =>
  createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
  );
