/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FiList } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <input type="checkbox" id="check" />

      <label id="icon" htmlFor="check">
        <FiList size={35} />
      </label>

      <div className="bar">
        <nav>
          <Link to="detail">
            <div className="link">Detalhes</div>
          </Link>
          <Link to="/">
            <div className="link">Agenda</div>
          </Link>
        </nav>
      </div>

      <h1>mudi</h1>
    </Container>
  );
};

export default Header;
