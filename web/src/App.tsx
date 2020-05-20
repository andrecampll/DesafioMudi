import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import Header from './components/Header';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Header />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
