import {
  PERFIL
} from '../../constants/ActionTypes';

/**
 * accion para cambiar a pantalla de Perfil
 * @param navigation
*/

export const iniciaPerfil = (navigation) => {
  return dispatch => {
      navigation.dispatch({ type: PERFIL });
  };
};
