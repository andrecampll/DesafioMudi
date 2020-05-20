import React from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import logo from '../../assets/favicon.png';

import {
  Container,
  NotificationsArea,
  Appointment,
  AppointmentDate,
  AppointmentsList,
  AppointmentTitle,
  AppointmentStatus,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <NotificationsArea>
        <header>
          <img src={logo} alt="mudi saúde" />
          <h2>
            <strong> Detalhes </strong>
          </h2>
        </header>
      </NotificationsArea>

      <AppointmentsList>
        <Appointment>
          <div>
            <AppointmentTitle>Paciente: Anderson Silva </AppointmentTitle>

            <AppointmentDate>08:00 - 08:30</AppointmentDate>
            <AppointmentStatus>
              <FiCheck size={20} />
              Confirmado
            </AppointmentStatus>
            <p>
              O paciente se lesionou durante as férias e deseja realizar uma
              consulta. Possui 40 anos, é aposentado e ex-atleta. A última
              consulta realizada com esse paciente foi em 27 de abril.
            </p>
          </div>
        </Appointment>
      </AppointmentsList>
    </Container>
  );
};

export default Dashboard;
