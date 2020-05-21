import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { ImageSourcePropType } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import logobranca from '../../assets/logobranca.png';
import medico from '../../assets/medico.png';
import medica from '../../assets/medica.jpg';

import {
  Container,
  WelcomeArea,
  LogoArea,
  Logo,
  LogoText,
  WelcomeText,
  InviteText,
  NotificationsArea,
  Header,
  HeaderText,
  NotificationsList,
  AppointmentsList,
  DoctorAvatar,
  DoctorCRM,
  DoctorContainer,
  DoctorName,
  InfoContainer,
  RowContainer,
  TextContainer,
  ActionArea,
  ActionButton,
} from './styles';

interface Doctor {
  name: string;
  avatar: ImageSourcePropType;
  CRM: string;
}

const Appointments: React.FC = () => {
  const navigation = useNavigation();

  const [doctors] = useState<Doctor[]>([
    {
      name: 'Dr. Carlos',
      avatar: medico,
      CRM: ' 123123',
    },
    {
      name: 'Dra. Bárbara',
      avatar: medica,
      CRM: ' 123123',
    },
    {
      name: 'Dr. Cláudio',
      avatar: medico,
      CRM: ' 123123',
    },
    {
      name: 'Dra. Maria',
      avatar: medica,
      CRM: ' 123123',
    },
  ]);

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

      <NotificationsArea>
        <Header>
          <Logo source={logobranca} />
          <HeaderText>Pendentes</HeaderText>
        </Header>
        <NotificationsList
          data={[1]}
          keyExtractor={item => item}
          renderItem={() => (
            <DoctorContainer onPress={() => navigation.navigate('Detalhes')}>
              <DoctorAvatar source={medica} />
              <InfoContainer>
                <DoctorName>Dra.Sofia</DoctorName>
                <DoctorCRM>CRM:123123</DoctorCRM>
                <RowContainer>
                  <Icon size={20} color="#ec135a" name="heart" />
                  <TextContainer>Cardiologista</TextContainer>
                </RowContainer>
                <RowContainer>
                  <Icon size={20} color="#ec135a" name="watch" />
                  <TextContainer>14:10</TextContainer>
                </RowContainer>
              </InfoContainer>

              <ActionArea>
                <ActionButton>
                  <Icon name="check" size={20} color="#00aa33" />
                </ActionButton>

                <ActionButton>
                  <Icon name="x" size={20} color="#aa0033" />
                </ActionButton>
              </ActionArea>
            </DoctorContainer>
          )}
        />
      </NotificationsArea>

      <NotificationsArea>
        <Header>
          <Logo source={logobranca} />
          <HeaderText>Confirmados</HeaderText>
        </Header>
        <AppointmentsList
          data={doctors}
          keyExtractor={(item: Doctor) => item.name}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <DoctorContainer onPress={() => navigation.navigate('Detalhes')}>
              <DoctorAvatar source={item.avatar} />
              <InfoContainer>
                <DoctorName>{item.name}</DoctorName>
                <DoctorCRM>
                  CRM:
                  {item.CRM}
                </DoctorCRM>
                <RowContainer>
                  <Icon size={20} color="#ec135a" name="heart" />
                  <TextContainer>Cardiologista</TextContainer>
                </RowContainer>
                <RowContainer>
                  <Icon size={20} color="#ec135a" name="watch" />
                  <TextContainer>15:10</TextContainer>
                </RowContainer>
              </InfoContainer>
            </DoctorContainer>
          )}
        />
      </NotificationsArea>
    </Container>
  );
};

export default Appointments;
