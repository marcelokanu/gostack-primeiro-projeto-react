import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

// Quando o return tem apenas ele e nào outro conteudo, nao precisa { }, pode usar direto as ( )
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* Informar que a rota é tudo depois da barra, utiliza-se + */}
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
