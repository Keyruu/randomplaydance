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
    setTimeout(async () => {
      const updated = await keycloak.updateToken(200)
      console.log("updatedToken", updated)
      if (keycloak.idToken && updated) localStorage.setItem("idToken", keycloak.idToken)
      refreshToken()
    }, 250000);
  } catch (err) {
    console.error(err)
  }
}