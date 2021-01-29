import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Context as AuthContext } from "./src/context/AuthContext";
import { Provider as BankrollProvider } from "./src/context/BankrollContext";
import { Context as BankrollContext } from "./src/context/BankrollContext";
import { navigationRef } from "./RootNavigation";

import { LoginScreen } from "./src/screens/LoginScreen";
import { RegisterScreen } from "./src/screens/RegisterScreen";
import { ResetScreen } from "./src/screens/ResetScreen";
import { AccountConfirmationScreen } from "./src/screens/AccountConfirmationScreen";
import { PasswordConfirmationScreen } from "./src/screens/PasswordConfirmationScreen";
import { PronosticScreen } from "./src/screens/PronosticScreen";
import { BankrollScreen } from "./src/screens/BankrollScreen";
import { AccountScreen } from "./src/screens/AccountScreen";

const AuthStack = createStackNavigator();
// const MainStack = createBottomTabNavigator();
// const DetailStack = createStackNavigator();
const MainStack = createStackNavigator();
const TabsStack = createBottomTabNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Reset"
        component={ResetScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="AccountConfirmation"
        component={AccountConfirmationScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="PasswordConfirmation"
        component={PasswordConfirmationScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

const TabsStackScreen = () => {
  return (
    <TabsStack.Navigator
      tabBarOptions={{
        showIcon: true,
        tabStyle: { justifyContent: "center" },
      }}
    >
      <TabsStack.Screen name="Pronostic" component={PronosticScreen} />
      <TabsStack.Screen name="Bankroll" component={BankrollScreen} />
      <TabsStack.Screen name="Account" component={AccountScreen} />
    </TabsStack.Navigator>
  );
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Tabs"
        component={TabsStackScreen}
        options={{ headerShown: false }}
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
