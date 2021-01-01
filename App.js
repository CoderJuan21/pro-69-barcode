import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransactionScreen from './screens/BookTransactionScreen'
import SearchScreen from './screens/SearchScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import ScanScreen from './screens/ScanScreen';

export default class App extends React.Component {
  render(){
    return(
<ScanScreen/>
    )
  }
}
