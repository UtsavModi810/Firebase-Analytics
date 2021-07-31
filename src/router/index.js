import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Analytics from '../screen/Analytics';
import LocalNotificationScreen from '../screen/LocalNotificationScreen';
import NotifeeScreen from '../screen/NotifeeScreen';


const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Analytics">
        <Stack.Screen name="Firebase Demo" component={Analytics}/>
        <Stack.Screen
          name="LocalNotificationScreen"
          component={LocalNotificationScreen}
        />
        <Stack.Screen name="NotifeeScreen" component={NotifeeScreen}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
