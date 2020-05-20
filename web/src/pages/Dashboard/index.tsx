import React from 'react';
import {
  FiArrowRight,
  FiCheckCircle,
  FiAlertCircle,
  FiSlash,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
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
          <Link to="detail">
            <AppointmentTitle>Agenda - Anderson Silva </AppointmentTitle>

            <AppointmentDate>08:00 - 08:30</AppointmentDate>
            <AppointmentStatus className="confirmed">
              <FiCheckCircle size={20} />
              Confirmado
            </AppointmentStatus>
          </Link>
          <aside>
            <Link to="detail">
              <FiArrowRight size={20} color="#ec135a" />
            </Link>
          </aside>
        </Appointment>

        <Appointment>
          <Link to="detail">
            <AppointmentTitle>Agenda - Ronaldinho </AppointmentTitle>

            <AppointmentDate>11:00 - 11:30</AppointmentDate>
            <AppointmentStatus className="notconfirmed">
              <FiAlertCircle size={20} color="#ffff00" />
              Não Confirmado
            </AppointmentStatus>
          </Link>
          <aside>
            <Link to="detail">
              <FiArrowRight size={20} color="#ec135a" />
            </Link>
          </aside>
        </Appointment>

        <Appointment>
          <Link to="detail">
            <AppointmentTitle>Agenda - Michael Jordan </AppointmentTitle>

            <AppointmentDate>14:00 - 14:30</AppointmentDate>
            <AppointmentStatus className="canceled">
              <FiSlash size={20} color="#e11010" />
              Cancelado
            </AppointmentStatus>
          </Link>
          <aside>
            <Link to="detail">
              <FiArrowRight size={20} color="#ec135a" />
            </Link>
          </aside>
        </Appointment>
      </AppointmentsList>
    </Container>
  );
};

export default Dashboard;
