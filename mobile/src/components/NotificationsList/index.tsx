import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import logobranca from '../../assets/logobranca.png';
import medico from '../../assets/medico.png';
import medica from '../../assets/medica.jpg';

import {
  NotificationsArea,
  Header,
  HeaderText,
  Notifications,
  ActionArea,
  ActionButton,
  DoctorAvatar,
  DoctorCRM,
  DoctorContainer,
  DoctorName,
  InfoContainer,
  RowContainer,
  TextContainer,
  Logo,
} from './styles';

const NotificationsList: React.FC = () => {
  const navigation = useNavigation();

  return (
    <NotificationsArea>
      <Header>
        <Logo source={logobranca} />
        <HeaderText>Pendentes</HeaderText>
      </Header>
      <Notifications
        data={[1]}
        keyExtractor={item => item}
        renderItem={() => (
          <DoctorContainer onPress={() => navigation.navigate('Detalhes')}>
            <DoctorAvatar source={medica} />
            <InfoContainer>
              <DoctorName>Dra. Sofia</DoctorName>
              <DoctorCRM>CRM:123123</DoctorCRM>
              <RowContainer>
                <Icon size={20} color="#ec135a" name="heart" />
                <TextContainer>Cardiologista</TextContainer>
              </RowContainer>
              <RowContainer>
                <Icon size={20} color="#ec135a" name="watch" />
                <TextContainer>Hoje, 14:10</TextContainer>
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
  );
};

export default NotificationsList;
