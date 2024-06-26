import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import HomeScreen from "./screens/HomeScreen"
import NewPostScreen from "./screens/NewPostScreen";
import SignUpScreen from "./screens/SignUpScreen"; 
import SignInScreen from "./screens/SignInScreen";

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false
}

const SignedInStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignUpScreen"
          screenOptions={screenOptions}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default SignedInStack