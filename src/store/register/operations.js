import * as registerActions from './actions';
import * as registerSelectors from './selectors';

export const update = registerActions.update;

export const register = () =>
  async (dispatch, getState, { api }) => {
    
    const accountToRegister = registerSelectors.getRegister(getState());

    const { username, email, password, phone } = accountToRegister;

    let registerData = {
      username,
      email,
      password,
      phone
    };

    try {
      const { data: account } = await api({ noAuth: true }).post('accounts', registerData);

      if (!account) {
        dispatch(registerActions.error('Erro ao criar conta, por favor tente novamente'));
        return;
      }

      const { data: auth } = await api({ noAuth: true }).post(
        'accounts/login', { username, password }
      );

      if (auth) {
      } else {
        dispatch(registerActions.error('Não foi possível fazer o login, tente novamente mais tarde'));
      }

    } catch (err) {
      if (err.response && err.response.status === 401) {
        dispatch(registerActions.error('Usuário ou senha inválida'));
      } else {
        dispatch(registerActions.error('Não foi possível fazer o login, tente novamente mais tarde'));
      }
    }
  }

export const checkAccountValidity = () =>
  async (dispatch, getState, { api }) => {
    const { email, username, phone } = registerSelectors.getRegister(getState());

    dispatch(registerActions.loading());

    try {
      await api({ noAuth: true }).post('accounts/existsWithData', { email, username, phone });

      dispatch(registerActions.update({ error: false, loading: false, valid: true }));
    } catch (err) {
      if (err.response && err.response.status === 422) {
        dispatch(registerActions.error('Este e-mail, cpf ou telefone já consta cadastrado.'));
      } else {
        dispatch(registerActions.error('Erro ao criar o usuário. Tente novamente.'));
      }
    }
  }

export const sendEmailToResetPassword = (cpf) =>
  async (dispatch, getState, { api }) => {
    dispatch(registerActions.loading());

    cpf = cpf.replace('.', '').replace('.', '').replace('-', '');

    const { data } = await api({ noAuth: true }).post('resetPassword', {
      cpf
    });

    return data;
  }
