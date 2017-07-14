import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AppWithNavigationState from '../navigator/Navegador';

import configureStore from '../store/configureStore';

const store = configureStore();

class Principal extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppWithNavigationState/>
      </Provider>
    );
  }
}

export default Principal;
