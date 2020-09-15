import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/TransactionScreen'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render() {
  return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator( {
  TransactionScreen:TransactionScreen,
} )

const AppContainer = createAppContainer(TabNavigator)