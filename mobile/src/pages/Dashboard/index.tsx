import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { ImageSourcePropType } from 'react-native';

import logo from '../../assets/logo.png';
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
  CategoryList,
  CategoryContainer,
  CategoryText,
  SelectionContainer,
  DoctorContainer,
  DoctorsList,
  DoctorName,
  DoctorAvatar,
  DoctorCRM,
  InfoContainer,
  RowContainer,
  TextContainer,
} from './styles';

interface Doctor {
  name: string;
  avatar: ImageSourcePropType;
  CRM: string;
  experience: string;
}

const Dashboard: React.FC = () => {
  const [categories] = useState([
    'Cardiologistas',
    'Neurologistas',
    'Endócrinologistas',
  ]);

  const navigation = useNavigation();

  const [doctors] = useState<Doctor[]>([
    {
      name: 'Dra. Sofia',
      avatar: medica,
      CRM: ' 123123',
      experience: 'Cardiologista',
    },
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
    <Container>
      <WelcomeArea>
        <LogoArea>
          <Logo source={logo} />
          <LogoText>mudi</LogoText>
        </LogoArea>
        <WelcomeText>Bem vindo(a)!</WelcomeText>
        <InviteText>
          Selecione um médico da sua região e faça um agendamento!
        </InviteText>
      </WelcomeArea>

      <SelectionContainer>
        <CategoryList
          data={categories}
          keyExtractor={item => item}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => (
            <CategoryContainer>
              <CategoryText>{item}</CategoryText>
            </CategoryContainer>
          )}
        />

        <DoctorsList
          data={doctors}
          keyExtractor={item => item.name}
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
              </InfoContainer>
              <Icon size={20} name="chevron-right" color="#ec135a" />
            </DoctorContainer>
          )}
        />
      </SelectionContainer>
    </Container>
  );
};

export default Dashboard;
