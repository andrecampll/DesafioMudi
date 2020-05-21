import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';

interface Props {
  toggleTheme(): void;
}

const Tab = createMaterialBottomTabNavigator();

const RouteTabs: React.FC = () => {
  return (
    <Tab.Navigator
      activeColor="#fff"
      inactiveColor="#000"
      barStyle={{ backgroundColor: '#ec135a' }}
    >
      <Tab.Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: (props: { color: '#fff' }) => (
            <Icon name="format-list-bulleted" size={20} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Agendamentos"
        component={Appointments}
        options={{
          tabBarIcon: (props: { color: '#fff' }) => (
            <Feather name="bookmark" size={20} color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RouteTabs;
