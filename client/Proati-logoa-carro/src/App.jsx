import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Componentes from './pages/Componentes';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/cadastro" component={ Cadastro } />
      <Route exact path="/componentes" component={ Componentes } />
    </Switch>

  );
}

export default App;
