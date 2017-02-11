import { environment } from './environments/environment';

export const ngkitConfig = {
  authentication: {
    endpoints: {
      check: 'auth/user',
      forgotPassword: 'auth/password/email',
      getUser: 'auth/user',
      login: 'auth/login',
      logout: 'auth/logout',
      register: 'auth/registration',
      resetPassword: 'auth/password/reset',
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
