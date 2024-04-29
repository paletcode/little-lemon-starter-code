import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerStyle: { backgroundColor: '#0CA794', color: '#ffffff' }, headerTintColor: '#ffffff' }}>
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Subscribe' component={SubscribeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
