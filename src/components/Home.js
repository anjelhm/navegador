import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StatusBar
} from 'react-native';

import { connect } from 'react-redux';

import { iniciaPerfil } from '../actions/navegador/actions';

import Drawer from './comunes/Drawer';

class ContenedorHome extends Component {

  static navigationOptions = {
    header: null
  };

  haciaPerfil() {
    this.props.iniciaPerfil(this.props.navigation);
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        <Drawer titulo="Bienvenido">
          <View>
            <Text>Hola</Text>
            <Button
              title="Perfil"
              onPress={ this.haciaPerfil.bind(this) }
            />
          </View>
        </Drawer>
      </View>
    );
  }
}

const mapStateToProps = ({ navegador: { nav } }) => ({
  nav
});

const Home = connect(
  mapStateToProps,
  { iniciaPerfil }
)(ContenedorHome);

export default Home;
