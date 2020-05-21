import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 10px 20px;
`;

export const WelcomeArea = styled.View`
  flex-direction: column;
`;

export const LogoArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 45px;
  height: 44px;
`;

export const LogoText = styled.Text`
  font-size: 40px;
  font-family: 'Poppins-Regular';
  font-weight: bold;
  margin-left: 5px;
  color: #111;
`;

export const WelcomeText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 25px;
  margin-top: 10px;
  color: #111;
`;

export const InviteText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
`;

export const CategoryList = styled(FlatList)`
  height: 50px !important;
  padding: 0;
  margin: 0;
`;

export const CategoryContainer = styled.TouchableOpacity`
  background-color: #fff;
  width: 150px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  border-radius: 5px;
`;

export const CategoryText = styled.Text`
  color: #00c4af;
  font-family: 'Poppins-Regular';
`;

export const SelectionContainer = styled.View`
  margin-top: 20px;
`;

export const DoctorContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
`;
export const DoctorName = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  font-weight: bold;
  color: #555;
`;
export const DoctorsList = styled(FlatList)`
  margin-top: 10px;
  height: 320px;
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
