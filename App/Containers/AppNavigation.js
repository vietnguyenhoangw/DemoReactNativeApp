import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import {HomeScreen} from './HomeScreen';
import {LoginScreen} from './LoginScreen';
import {MenuScreen} from './MenuScreen';
import {ProfileScreen} from './ProfileScreen/';
import SplashScreen from './SplashScreen';
import {EditProfileScreen} from './EditProfileScreen';
import {LocationScreen} from './LocationScreen'
import {ListFriendScreen} from './ListFriendScreen'
import {OtherProfileScreen} from './OtherProfileScreen'

// HomeTab
import {DRSTabBar} from '../Components';

// auth stack
const AuthStack = createStackNavigator();

function AuthStacks() {
  return (
    <AuthStack.Navigator initialRouteName="LoginScreen">
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    </AuthStack.Navigator>
  );
}

// tab-bottom
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      backBehavior={'none'}
      tabBar={(props) => <DRSTabBar {...props} />}>
      <Tab.Screen name={'ListFriendScreen'} component={ListFriendScreen} />
      <Tab.Screen name={'HomeScreen'} component={HomeScreen} />
      <Tab.Screen name={'MenuScreen'} component={MenuScreen} />
    </Tab.Navigator>
  );
}

// app stack
const AppStack = createStackNavigator();

function AppStacks() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name={'Demoreduxsaga'} component={HomeTabs} />
      <AppStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <AppStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <AppStack.Screen name="LocationScreen" component={LocationScreen} />
      <AppStack.Screen name="OtherProfileScreen" component={OtherProfileScreen} />
    </AppStack.Navigator>
  );
}

// stack
const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'SplashScreen'} headerMode={'none'}>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={'AuthStack'} component={AuthStacks} />
        <Stack.Screen name={'AppStack'} component={AppStacks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
