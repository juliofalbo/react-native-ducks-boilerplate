export const getAccount = (state) => state.account;

export const getUsername = (state) => getAccount(state).username;

export const getPassword = (state) => getAccount(state).password;

export const getEmail = (state) => getAccount(state).email;

export const getPhone = (state) => getAccount(state).phone;

export const getAuth = (state) => getAccount(state).auth;

export const getId = (state) => getAccount(state).id;

export const getLoading = (state) => getAccount(state).loading;

export const getError = (state) => getAccount(state).error;