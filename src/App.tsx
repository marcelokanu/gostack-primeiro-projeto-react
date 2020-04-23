import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

// const App: React.FC = () => {
//   return <Routes />;
// };
// Como tem apenas um return dentro, da para deixar:
// const App: React.FC = () => <Routes />;

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
