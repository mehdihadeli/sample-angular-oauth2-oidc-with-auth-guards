import { AuthConfig } from 'angular-oauth2-oidc';

// export const authConfig: AuthConfig = {
  // issuer: 'https://localhost:64999',
  // clientId: 'CustomersDBClient3',
  // scope: 'openid profile email',
  // redirectUri: window.location.origin + '/index.html',
  // silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  // silentRefreshTimeout: 5000, // For faster testing
  // timeoutFactor: 0.25, // For faster testing
  // sessionChecksEnabled: true,
  // showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  // clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
// };
export const authConfig: AuthConfig = {
   issuer: 'https://localhost:64999',
   clientId: 'CustomersDBClient13',
   scope: 'email',
   redirectUri: window.location.origin + '/index.html',
   silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
   silentRefreshTimeout: 5000, // For faster testing
   timeoutFactor: 0.25, // For faster testing
    logoutUrl:'https://localhost:64999/api/account/logout',
   sessionChecksEnabled: true,
   showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
   clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
 };


// export const authConfig: AuthConfig = {
  // issuer: 'https://demo.identityserver.io',
  // clientId: 'implicit',
  // redirectUri: window.location.origin + '/index.html',
  // silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  // scope: 'openid profile email api',
  // silentRefreshTimeout: 5000, // For faster testing
  // timeoutFactor: 0.25, // For faster testing
  // sessionChecksEnabled: true,
  // showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  // clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
// };
