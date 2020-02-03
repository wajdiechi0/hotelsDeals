/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Deals, Details} from './views';
const stackNav = createStackNavigator(
  {
    Deals: {
      screen: Deals,
    },
    Details: {
      screen: Details,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(stackNav);
