import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Context as AuthContext } from "./src/context/AuthContext";

import { LoginScreen } from "./src/screens/LoginScreen";
import { RegisterScreen } from "./src/screens/RegisterScreen";
import { ResetScreen } from "./src/screens/ResetScreen";
import { MainScreen } from "./src/screens/MainScreen";
import { AccountScreen } from "./src/screens/AccountScreen";

const AuthStack = createStackNavigator();
const MainStack = createBottomTabNavigator();

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
    </AuthStack.Navigator>
  );
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="Account" component={AccountScreen} />
    </MainStack.Navigator>
  );
};

const App = () => {
  const { state } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {state.token ? <MainStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default function ProviderWrapper() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
