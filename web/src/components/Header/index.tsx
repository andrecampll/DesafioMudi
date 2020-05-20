/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { FiList, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <input type="checkbox" id="check" onClick={() => setChecked(!checked)} />

      <label id="icon" htmlFor="check">
        {checked ? <FiX size={35} /> : <FiList size={35} />}
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

      <aside>
        <Link to="detail">
          <div>Detalhes</div>
        </Link>
        <Link to="/">
          <div>Agenda</div>
        </Link>
      </aside>
    </Container>
  );
};

export default Header;
