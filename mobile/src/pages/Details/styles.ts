import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px;
`;

export const DoctorContainer = styled.View`
  background-color: #fff;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const DoctorName = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 20px;
  font-weight: bold;
  color: #555;
`;

export const DoctorAvatar = styled.Image`
  width: 70px;
  height: 69px;
  margin-right: 10px;
  border-radius: 35px;
`;
export const DoctorCRM = styled.Text`
  font-family: 'Poppins-Regular';
  color: #aaa;
`;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const TextContent = styled.Text`
  font-family: 'Poppins-Regular';
  margin-bottom: 10px;
  color: #222;
`;

export const RowContainer = styled.View`
  flex-direction: row;
`;
export const TextContainer = styled.Text`
  color: #ec135a;
  font-family: 'Poppins-Regular';
  margin-left: 5px;
`;

export const ScheduleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ScheduleButton = styled.TouchableOpacity`
  background-color: #ddd;
  padding: 10px 15px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px #ddd solid;
`;
export const ScheduleText = styled.Text``;

export const ActionButton = styled.TouchableOpacity`
  background-color: #ec135a;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const ActionButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-family: 'Poppins-Regular';
  font-size: 17px;
`;

export const ActionArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
