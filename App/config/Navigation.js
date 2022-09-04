import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";
import Home from "../screens/Home";
import Options from "../screens/Options";
import CurrencyList from "../screens/CurrencyList";
import Welcome from "../screens/Welcome";

import { ConversionContextProvider } from "../util/ConversionContext";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator initialRouteName="Home ">
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Options" component={Options} />
    <MainStack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false }}
    />
  </MainStack.Navigator>
);
const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
  <ModalStack.Navigator mode="modal">
    <ModalStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
    <ModalStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
    <ModalStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ navigation, route }) => ({
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity>
            <Entypo
              name="cross"
              size={30}
              color={colors.blue}
              onPress={() => navigation.pop()}
              style={{ paddingHorizontal: 10 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </ModalStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ConversionContextProvider>
      <MainStackScreen />
    </ConversionContextProvider>
  </NavigationContainer>
);
