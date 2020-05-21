import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <View style={{ backgroundColor: '#EAEDF2', flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ec135a" />
      <Routes />
    </View>
  );
};

export default App;
