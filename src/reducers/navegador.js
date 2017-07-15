import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import {
  HOME,
  PERFIL
} from '../constants/ActionTypes';

import { Navegador } from '../navigator/Navegador';

const estadoInicial = Navegador.router.getStateForAction(Navegador.router.getActionForPathAndParams('Home'));

const nav = (state = estadoInicial, action) => {
  let nextState;

  switch(action.type) {
    case PERFIL:
      nextState = Navegador.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Perfil' }),
        state
      );
      break;
    case HOME:
      nextState = Navegador.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    default:
      nextState = Navegador.router.getStateForAction(action, state);
      break;
  };

  // retorna el state si nextState es null o undefined
  return nextState || state;

};

export default combineReducers({
  nav
});
