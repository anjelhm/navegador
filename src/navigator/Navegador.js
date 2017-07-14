import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Home from '../components/Home';
import Perfil from '../components/Perfil';

const routesConfiguration = {
  Home: { screen: Home },
  Perfil: { screen: Perfil }
};

export const Navegador = StackNavigator(routesConfiguration);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <Navegador navigation={ addNavigationHelpers({
    dispatch,
    state: nav
  }) } />
);

const mapStateToProps = ({ navegador: { nav } }) => ({
  nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
