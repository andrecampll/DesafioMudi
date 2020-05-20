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
            Notificações
            <strong> mudi </strong>
          </h2>
        </header>
        <div>
          <p>Nenhuma solicitação de pacientes</p>
        </div>
      </NotificationsArea>

      <AppointmentsList>
        <header>
          <h3>Pacientes do dia</h3>
          <div>3</div>
        </header>

        <Appointment>
          <div>
            <AppointmentTitle>Agenda - Anderson Silva </AppointmentTitle>

            <AppointmentDate>08:00 - 08:30</AppointmentDate>
            <AppointmentStatus>
              <FiCheck size={20} />
              Confirmado
            </AppointmentStatus>
          </div>
          <aside>
            <FiArrowRight size={20} color="#ec135a" />
          </aside>
        </Appointment>

        <Appointment>
          <div>
            <AppointmentTitle>Agenda - Ronaldinho </AppointmentTitle>

            <AppointmentDate>11:00 - 11:30</AppointmentDate>
            <AppointmentStatus>
              <FiCheck size={20} />
              Confirmado
            </AppointmentStatus>
          </div>
          <aside>
            <FiArrowRight size={20} color="#ec135a" />
          </aside>
        </Appointment>

        <Appointment>
          <div>
            <AppointmentTitle>Agenda - Michael Jordan </AppointmentTitle>

            <AppointmentDate>14:00 - 14:30</AppointmentDate>
            <AppointmentStatus>
              <FiCheck size={20} />
              Confirmado
            </AppointmentStatus>
          </div>
          <aside>
            <FiArrowRight size={20} color="#ec135a" />
          </aside>
        </Appointment>
      </AppointmentsList>
    </Container>
  );
};

export default Dashboard;
