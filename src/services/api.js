import axios from 'axios';
import config from '../../config';

let auth = null

const createAuthenticatedApi = async (receivedAuth) => {
  if (!receivedAuth) {
    return;
  }

  auth = receivedAuth;
}

export const removeApiAuth = () => {
  auth = null;
}

const api = ({ noAuth } = {}) => {
  const headers = (auth && auth.id && !noAuth)
    ? { Authorization: auth.id }
    : null;

  const apiInstance = axios.create({
    baseURL: config.api.url,
    timeout: config.api.timeout,
    headers
  });

  return apiInstance;
}

export { api, createAuthenticatedApi };
