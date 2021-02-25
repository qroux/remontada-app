import React, { useContext } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Context as AuthContext } from './src/context/AuthContext';
import { Provider as BankrollProvider } from './src/context/BankrollContext';
import { navigationRef } from './RootNavigation';

import { LoginScreen } from './src/screens/LoginScreen';
import { RegisterScreen } from './src/screens/RegisterScreen';
import { ResetScreen } from './src/screens/ResetScreen';
import { AccountConfirmationScreen } from './src/screens/AccountConfirmationScreen';
import { PasswordConfirmationScreen } from './src/screens/PasswordConfirmationScreen';
import { PronosticScreen } from './src/screens/PronosticScreen';
import { BankrollScreen } from './src/screens/BankrollScreen';
import { BankrollDetailScreen } from './src/screens/BankrollDetailScreen';
import { AccountScreen } from './src/screens/AccountScreen';

import {
  AccountIcon,
  BankrollIcon,
  PronoIcon,
} from './src/components/tabComponents/TabsComponent';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const TabsStack = createMaterialTopTabNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <AuthStack.Screen name='Login' component={LoginScreen} />
      <AuthStack.Screen name='Register' component={RegisterScreen} />
      <AuthStack.Screen name='Reset' component={ResetScreen} />
      <AuthStack.Screen
        name='AccountConfirmation'
        component={AccountConfirmationScreen}
      />
      <AuthStack.Screen
        name='PasswordConfirmation'
        component={PasswordConfirmationScreen}
      />
    </AuthStack.Navigator>
  );
};

const TabsStackScreen = () => {
  return (
    <TabsStack.Navigator
      tabBarPosition='bottom'
      tabBarOptions={{
        showIcon: true,
        tabStyle: { justifyContent: 'center' },
      }}>
      <TabsStack.Screen
        name='Pronostic'
        component={PronosticScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <PronoIcon focused={focused} color={color} />
          ),
          tabBarLabel: ({ color }) => <Text style={{ color }}>Pronostics</Text>,
        }}
      />
      <TabsStack.Screen
        name='Bankroll'
        component={BankrollScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <BankrollIcon focused={focused} color={color} />
          ),
          tabBarLabel: ({ color }) => <Text style={{ color }}>Bankroll</Text>,
        }}
      />
      <TabsStack.Screen
        name='Account'
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <AccountIcon focused={focused} color={color} />
          ),
          tabBarLabel: ({ color }) => <Text style={{ color }}>Compte</Text>,
        }}
      />
    </TabsStack.Navigator>
  );
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name='Tabs'
        component={TabsStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name='BankrollDetail'
        component={BankrollDetailScreen}
        options={{
          title: ' ',
        }}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  const { state } = useContext(AuthContext);
  return (
    <NavigationContainer ref={navigationRef}>
      {state.token ? <MainStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default function ProviderWrapper() {
  return (
    <AuthProvider>
      <BankrollProvider>
        <App />
      </BankrollProvider>
    </AuthProvider>
  );
}
