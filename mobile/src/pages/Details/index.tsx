import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import medica from '../../assets/medica.jpg';

import {
  Container,
  DoctorAvatar,
  DoctorCRM,
  DoctorContainer,
  InfoContainer,
  DoctorName,
  TextContent,
  Content,
  RowContainer,
  TextContainer,
  ScheduleContainer,
  ScheduleButton,
  ScheduleText,
  ActionButton,
  ActionButtonText,
  ActionArea,
} from './styles';

const Detail: React.FC = () => {
  const [selected, setSelected] = useState(false);
  const navigation = useNavigation();

  const handleAppointment = useCallback(() => {
    Alert.alert(
      'Agendamento feito com sucesso!',
      'Agora, você precisa confirmar a sua presença na área de Agendamentos.',
    );

    navigation.navigate('Agendamentos');
  }, [navigation]);

  return (
    <Container>
      <DoctorContainer>
        <Content>
          <DoctorAvatar source={medica} />
          <InfoContainer>
            <DoctorName>Dra. Sofia</DoctorName>
            <DoctorCRM>CRM: 123123</DoctorCRM>
          </InfoContainer>
        </Content>

        <RowContainer>
          <Icon size={20} color="#ec135a" name="heart" />
          <TextContainer>Cardiologista</TextContainer>
        </RowContainer>

        <TextContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quam
          ullam obcaecati in deserunt. Dolor eaque, necessitatibus ut ducimus,
          magnam vero tempora natus, cumque cupiditate quaerat mollitia
          voluptatem vitae atque!
        </TextContent>

        <RowContainer>
          <Icon size={20} color="#ec135a" name="map-pin" />
          <TextContainer>Endereço</TextContainer>
        </RowContainer>

        <TextContent>Avenida das Flores, 102 B</TextContent>

        <RowContainer>
          <Icon size={20} color="#ec135a" name="watch" />
          <TextContainer>Escolha um horário</TextContainer>
        </RowContainer>

        <ScheduleContainer>
          <ScheduleButton>
            <ScheduleText>07:45</ScheduleText>
          </ScheduleButton>

          <ScheduleButton>
            <ScheduleText>09:10</ScheduleText>
          </ScheduleButton>

          <ScheduleButton>
            <ScheduleText>14:10</ScheduleText>
          </ScheduleButton>

          <ScheduleButton>
            <ScheduleText>16:10</ScheduleText>
          </ScheduleButton>
        </ScheduleContainer>
      </DoctorContainer>

      <ActionArea>
        <ActionButton onPress={() => handleAppointment()}>
          <ActionButtonText>Agendar</ActionButtonText>
        </ActionButton>

        <ActionButton>
          <ActionButtonText>Avaliar</ActionButtonText>
        </ActionButton>
      </ActionArea>
    </Container>
  );
};

export default Detail;
