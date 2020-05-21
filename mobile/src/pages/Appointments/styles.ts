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
