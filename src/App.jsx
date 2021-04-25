import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './components/Admin';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Menu from './components/Menu';
import Formulario from './components/Formulario';

function App() {

  return (

    <div className='container'>
      <Router>
        <Menu></Menu>
        <Switch>
          <Route path='/registro' component={Login}></Route>
          <Route path='/inicio' component={Inicio}><Formulario /></Route>
          <Route path='/admin' component={Admin}></Route>
          <Route path='/login' component={Login}></Route>
        </Switch>
      </Router>

    </div>

  );
}

export default App;
