import { createAuthenticatedApi, removeApiAuth } from '../../services/api';

import * as accountActions from './actions';
import * as accountSelectors from './selectors';

export const receive = accountActions.receive;

export const update = accountActions.update;

export const login = () =>
  async (dispatch, getState, { api }) => {
    dispatch(accountActions.loading());

    const { username, password } = accountSelectors.getAccount(getState());

    try {
      const { data: auth } = await api({ noAuth: true }).post('accounts/login', { username, password });

      if (auth) {
        await createAuthenticatedApi(auth);

        const { data: account } = await api().get(`accounts/${auth.userId}`);

        await dispatch(accountActions.receive({ ...account, auth }));

        return;
      } else {
        dispatch(accountActions.error('CPF ou sennha inválida'));
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        dispatch(accountActions.error('CPF ou sennha inválida'));
      } else {
        dispatch(accountActions.error('Não foi possível conectar-se ao TAXI.RIO, tente novamente mais tarde'));
      }
    }
  }

export const logout = () =>
  async (dispatch, getState) => {
    dispatch(accountActions.reset());
    dispatch(accountActions.update({ auth: null }));

    removeApiAuth();
  }