import React from 'react';
import { Text, Image } from 'react-native';
import logo from '../../assets/logo.png';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <Text>Mudi</Text>
      </Container>

      <Image source={logo} />
    </>
  );
};

export default Dashboard;
