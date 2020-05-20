import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    margin-left: 60px;
  }

  #check {
    display: none;
  }

  #icon {
    cursor: pointer;
    padding: 7px;
    position: absolute;
    z-index: 1;
  }

  .bar {
    background-color: #fff;
    height: 100%;
    width: 300px;
    position: absolute;
    transition: all 0.2s linear;
    left: -300px;
  }

  .link {
    padding: 20px;
    font-size: 14px;
    transition: all 0.2s linear;
    border-bottom: 1px solid #ddd;
    opacity: 0;
    left: -300px;

    &:hover {
      opacity: 0.6;
    }
  }

  #check:checked ~ .bar {
    transform: translateX(300px);
  }

  #check:checked ~ .bar nav a .link {
    opacity: 1;
    transform: translateX(300px);
    transition-delay: 0.2s;
  }

  div {
    nav {
      width: 100%;
      position: absolute;
      top: 60px;

      a {
        text-decoration: none;
        color: #ec135a;
        left: -300px;
        position: relative;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
`;
