import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';

import logobranca from '../../assets/logobranca.png';
import medico from '../../assets/medico.png';
import medica from '../../assets/medica.jpg';

import {
  NotificationsArea,
  Header,
  HeaderText,
  Appointments,
  DoctorAvatar,
  DoctorCRM,
  DoctorContainer,
  DoctorName,
  InfoContainer,
  RowContainer,
  TextContainer,
  Logo,
} from './styles';

interface Doctor {
  name: string;
  avatar: ImageSourcePropType;
  CRM: string;
  experience: string;
}

const AppointmentsList: React.FC = () => {
  const navigation = useNavigation();

  const [doctors] = useState<Doctor[]>([
    {
      name: 'Dr. Carlos',
      avatar: medico,
      CRM: ' 123123',
      experience: 'Oncologista',
    },
    {
      name: 'Dra. Bárbara',
      avatar: medica,
      CRM: ' 123123',
      experience: 'Pediatra',
    },
    {
      name: 'Dr. Cláudio',
      avatar: medico,
      CRM: ' 123123',
      experience: 'Ortopedista',
    },
    {
      name: 'Dra. Maria',
      avatar: medica,
      CRM: ' 123123',
      experience: 'Neurologista',
    },
  ]);

  return (
    <NotificationsArea>
      <Header>
        <Logo source={logobranca} />
        <HeaderText>Confirmados</HeaderText>
      </Header>
      <Appointments
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
                <TextContainer>{item.experience}</TextContainer>
              </RowContainer>
              <RowContainer>
                <Icon size={20} color="#ec135a" name="watch" />
                <TextContainer>Sexta, 9:10</TextContainer>
              </RowContainer>
            </InfoContainer>
          </DoctorContainer>
        )}
      />
    </NotificationsArea>
  );
};

export default AppointmentsList;
