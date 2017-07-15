import {
  HOME,
  PERFIL
} from '../../constants/ActionTypes';

export const homeIniciar = navigation =>
  (navigation.dispatch({ type: HOME }));

export const perfilIniciar = navigation =>
  (navigation.dispatch({ type: PERFIL }));

/**
 * accion para cambiar a pantalla de Home
 * @param navigation
*/

export const iniciarHome = (navigation) => {
  return dispatch => {
    dispatch(homeIniciar(navigation));
  };
};

/**
 * accion para cambiar a pantalla de Perfil
 * @param navigation
*/

export const iniciaPerfil = (navigation) => {
  return dispatch => {
      dispatch(perfilIniciar(navigation));
  };
};
