import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StatusBar
} from 'react-native';

import { connect } from 'react-redux';

import { iniciarHome } from '../actions/navegador/actions';

import Drawer from './comunes/Drawer';

class ContenedorPerfil extends Component {

  static navigationOptions = {
    header: null
  };

  haciaHome() {
    this.props.iniciarHome(this.props.navigation);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Drawer
          titulo="Perfil"
        >
          <View>
            <StatusBar hidden/>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Button
              title="Volver"
              onPress={ this.haciaHome.bind(this) }
            />
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
            <Text>Perfil</Text>
          </View>
        </Drawer>
      </View>
    );
  }
}

const mapStateToProps = ({ navegador: { nav } }) => ({
  nav
});

const Perfil = connect(
  mapStateToProps,
  { iniciarHome }
)(ContenedorPerfil);

export default Perfil;
