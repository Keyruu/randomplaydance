import Keycloak from 'keycloak-js'
import { idToken, isAuthenticated, user } from './store/auth';
import type { UserInfo } from './types/userInfo';

export let keycloak: Keycloak;

export function createKeycloak() {
  keycloak = new Keycloak({
    url: 'http://localhost:1337/keycloak/',
    realm: 'hasura',
    clientId: 'hasura'
  });
}

export async function checkSso(origin: string) {
  try {
    const authenticated = await keycloak.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: `${origin}/sso`
    })
    await setAuth(authenticated)
  } catch (err) {
    console.error(err)
  }
}

export async function login() {
  try {
    const authenticated = await keycloak.init({
      onLoad: 'login-required',
    })
    await setAuth(authenticated)
  } catch (err) {
    console.error(err)
  }
}

async function setAuth(authenticated: boolean) {
  if (keycloak.idToken) localStorage.setItem("idToken", keycloak.idToken)
  await keycloak.loadUserInfo()
  user.set(keycloak.userInfo as UserInfo)
  isAuthenticated.set(authenticated)
  refreshToken()
}

async function refreshToken() {
  try {
    await keycloak.updateToken(250)
    refreshToken()
  } catch (err) {
    console.error(err)
  }
}