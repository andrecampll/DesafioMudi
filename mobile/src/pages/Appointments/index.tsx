import React from 'react';

import {
  Container,
  WelcomeArea,
  LogoArea,
  LogoText,
  WelcomeText,
  InviteText,
} from './styles';

import NotificationsList from '../../components/NotificationsList';
import AppointmentsList from '../../components/AppointmentsList';

const Appointments: React.FC = () => {
  return (
    <Container>
      <WelcomeArea>
        <LogoArea>
          <LogoText>mudi</LogoText>
        </LogoArea>
        <WelcomeText>Agendamentos</WelcomeText>
        <InviteText>
          Confirme a sua presença antes de realizar a consulta
        </InviteText>
      </WelcomeArea>

      <NotificationsList />

      <AppointmentsList />
    </Container>
  );
};

export default Appointments;
