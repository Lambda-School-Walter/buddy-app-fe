import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// components
import Landing from './Landing';
import SignUp from './SignUp';
import SignIn from './SignIn';

const AppNavigator = createStackNavigator(
  {
    Landing: {
      screen: Landing,
    },
    SignUp: {
      screen: SignUp,
    },
    SignIn: {
      screen: SignIn,
    },
  },
  {
    initialRouteName: 'Landing',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);