import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Details from './pages/Details';

import Routes from './RouteTabs';

const Stack = createStackNavigator();

const Nav: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Routes"
          component={Routes}
          options={{
            headerShown: false,
            headerTransparent: true,
          }}
        />
        <Stack.Screen name="Detalhes" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
