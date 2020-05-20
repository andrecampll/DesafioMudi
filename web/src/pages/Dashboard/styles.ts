import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const NotificationsArea = styled.div`
  margin-top: 10px;
  background-color: #fff;
  border-radius: 6px;
  header {
    background-color: #ec135a;
    padding: 15px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    display: flex;
    align-items: center;

    h2 {
      color: #fff;
      font-weight: 500;
      font-size: 20px;
    }

    img {
      width: 35px;
      height: 34px;
      margin-right: 10px;
    }
  }

  div {
    padding: 15px;
    p {
      color: #333;
      font-size: 16px;
    }
  }
`;

export const Appointment = styled.div`
  padding: 15px;
  border-bottom: solid 1px #ccc;
  cursor: pointer;
  transition: opacity 0.4s;
  display: flex;
  justify-content: space-between;

  aside {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    opacity: 0.7;
  }
`;
export const AppointmentDate = styled.div`
  color: #ec135a;
  font-weight: 600;
`;
export const AppointmentsList = styled.div`
  margin-top: 20px;
  border-radius: 6px;
  background-color: #fff;
  header {
    display: flex;
    align-items: center;
    padding: 15px;
    justify-content: space-between;

    div {
      background-color: #ec135a;
      border-radius: 50%;
      padding: 3px 11px 3px 11px;
      color: #fff;
    }

    h3 {
      color: #666;
      font-weight: 500;
    }
  }
`;
export const AppointmentTitle = styled.div`
  font-weight: 600;
`;
export const AppointmentStatus = styled.div`
  color: #00aa00;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
`;
