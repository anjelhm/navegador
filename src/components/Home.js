import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import { connect } from 'react-redux';

import { iniciaPerfil } from '../actions/navegador/actions';

class ContenedorHome extends Component {

  static navigationOptions = {
    title: 'Bienvenido'
  };

  haciaPerfil() {
    this.props.iniciaPerfil(this.props.navigation);
  }

  render() {
    return (
      <View>
        <Text>Bienvenido!!</Text>
        <Button
          title="Perfil"
          onPress={ this.haciaPerfil.bind(this) }
        />
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
