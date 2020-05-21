import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';
// import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 5px 20px;
`;

export const WelcomeArea = styled.View`
  flex-direction: column;
`;

export const LogoArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 40px;
  height: 39px;
`;

export const LogoText = styled.Text`
  font-size: 40px;
  font-family: 'Poppins-Regular';
  font-weight: bold;
`;

export const WelcomeText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 25px;
  margin-top: 5px;
`;

export const InviteText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
`;

export const NotificationsArea = styled.View`
  margin-top: 10px;
  background-color: #fff;
  border-radius: 6px;
`;

export const Header = styled.View`
  background-color: #ec135a;
  padding: 10px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 17px;
  font-family: 'Poppins-Regular';
  margin-left: 10px;
`;

export const HeaderTextStrong = styled.Text`
  font-weight: bold;
  font-family: 'Poppins-Regular';
`;

export const NotificationsList = styled(FlatList)`
  padding: 5px 15px 0 15px;
  width: 100%;
`;

export const AppointmentsList = styled(FlatList)`
  padding: 5px 15px;
  width: 100%;
  height: 130px;
`;

export const NotificationsText = styled.Text`
  color: #333;
  font-size: 15px;
  font-family: 'Poppins-Regular';
`;

export const DoctorContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 5px;
`;
export const DoctorName = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  font-weight: bold;
`;

export const DoctorAvatar = styled.Image`
  width: 60px;
  height: 59px;
  margin-right: 10px;
  border-radius: 30px;
`;
export const DoctorCRM = styled.Text`
  font-family: 'Poppins-Regular';
  color: #aaa;
`;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const RowContainer = styled.View`
  flex-direction: row;
`;
export const TextContainer = styled.Text`
  color: #ec135a;
  font-family: 'Poppins-Regular';
  margin-left: 5px;
`;

export const ActionArea = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;
export const ActionButton = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;

  margin-top: 10px;
`;
