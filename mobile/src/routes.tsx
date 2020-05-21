import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Details from './pages/Details';

import Tabs from './tabs.routes';

const Stack = createStackNavigator();

const Nav: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Routes"
          component={Tabs}
          options={{
            headerShown: false,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Details}
          options={{
            headerStyle: { backgroundColor: '#ec135a' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
