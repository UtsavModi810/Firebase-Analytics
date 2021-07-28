import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Analytics from '../screen/Analytics';
import LocalNotificationScreen from '../screen/LocalNotificationScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Analytics">
        <Stack.Screen name="Firebase Demo" component={Analytics} />
        <Stack.Screen
          name="LocalNotificationScreen"
          component={LocalNotificationScreen}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
