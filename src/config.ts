import { environment } from './environments/environment';

export const ngkitConfig = {
  authentication: {
    endpoints: {
      check: 'user',
      forgotPassword: 'password/email',
      getUser: 'user',
      login: 'login',
      logout: 'logout',
      register: 'register',
      resetPassword: 'password/reset',
    },
  },
  devMode: environment.devMode,
  http: {
    baseUrl: "http://ojreviews.dev/api",
  },
  token: {
    readAs: "data.token.access_token"
  }
};
