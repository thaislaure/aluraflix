import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video'
import Home from './pages/Home/Home';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/cadastro/video" component={CadastroVideo} exact />
    <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
    
    <Route component={() => (<div>Pagina 404</div>)} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);