
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { HomeScreen } from './HomeScreen/index'
import { LoginScreen } from './LoginScreen/index'
import { MenuScreen } from './MenuScreen/index'

// HomeTab
import { DRSTabBar } from '../Components'

// auth stack
const AuthStack = createStackNavigator()

function AuthStacks() {
  return (
      <AuthStack.Navigator initialRouteName="LoginScreen">
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      </AuthStack.Navigator>
  )
}

// tab-bottom
const Tab = createBottomTabNavigator()

function HomeTabs() {
  return (
    <Tab.Navigator
      backBehavior={'none'}
      tabBar={(props) => <DRSTabBar {...props} />}
    >
      <Tab.Screen name={'HomeScreen'} component={HomeScreen} />
      <AppStack.Screen name={'MenuScreen'} component={MenuScreen} />
    </Tab.Navigator>
  )
}

// app stack
const AppStack = createStackNavigator()

function AppStacks() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name={'HomeTab'} component={HomeTabs} />
    </AppStack.Navigator>
  )
}

// stack
const Stack = createStackNavigator()

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'AuthStack'} component={AuthStacks} />
        <Stack.Screen name={'AppStack'} component={AppStacks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;