import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Register from './register/Register';
import Login from './login/Login';

class App extends Component {
  render() {
    return (
      <div>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
