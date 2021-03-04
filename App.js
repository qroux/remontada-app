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

import { LoadingScreen } from './src/screens/auth/LoadingScreen';
import { LoginScreen } from './src/screens/auth/LoginScreen';
import { RegisterScreen } from './src/screens/auth/RegisterScreen';
import { ResetScreen } from './src/screens/auth/ResetScreen';
import { AccountConfirmationScreen } from './src/screens/auth/AccountConfirmationScreen';
import { PasswordConfirmationScreen } from './src/screens/auth/PasswordConfirmationScreen';
import { PronosticScreen } from './src/screens/main/PronosticScreen';
import { BankrollScreen } from './src/screens/main/BankrollScreen';
import { BankrollDetailScreen } from './src/screens/main/BankrollDetailScreen';
import { AccountScreen } from './src/screens/main/AccountScreen';
import { PositionFormScreen } from './src/screens/main/PositionFormScreen';

import {
  AccountIcon,
  BankrollIcon,
  PronoIcon,
} from './src/components/tabComponents/TabsComponent';
import { ActivityHeader } from './src/components/shared/ActivityHeader';

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
      <AuthStack.Screen name='Loading' component={LoadingScreen} />
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
          headerRight: () => <ActivityHeader />,
        }}
      />
      <MainStack.Screen
        name='PositionForm'
        component={PositionFormScreen}
        options={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          title: 'Enregistrement du pari',
          headerRight: () => <ActivityHeader />,
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
