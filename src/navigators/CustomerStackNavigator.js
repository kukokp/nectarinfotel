import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SaveCustomer} from '../screens/Customer/SaveCustomer';

const mainStack = createStackNavigator();

export function CustomerStackNavigator() {
  return (
    <mainStack.Navigator
      mode={'modal'}
      screenOptions={{
        headerShown: false,
      }}>
      <mainStack.Screen name={'SaveCustomer'} component={SaveCustomer} />
    </mainStack.Navigator>
  );
}
