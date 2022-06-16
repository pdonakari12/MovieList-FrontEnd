import { authenticationResponse, claim } from "./auth.models";

const tokenkey = "token";
const expirationkey = "token-expiration";
export function saveToken(authData: authenticationResponse) {
  localStorage.setItem(tokenkey, authData.token);
  localStorage.setItem(expirationkey, authData.expiration.toString());
}

export function getClaims(): claim[] {
  const token = localStorage.getItem(tokenkey);

  if (!token) {
    return [];
  }

  const expiration = localStorage.getItem(expirationkey)!;
  const expirationDate = new Date(expiration);

  if (expirationDate <= new Date()) {
    logout();
    return [];
  }

  const dataToken = JSON.parse(atob(token.split(".")[1]));

  const response: claim[] = [];
  for (const property in dataToken) {
    response.push({ name: property, value: dataToken[property] });
  }
  return response;
}

export function logout(){
    localStorage.removeItem(tokenkey);
    localStorage.removeItem(expirationkey);

}

export function getToken(){
  return localStorage.getItem(tokenkey);
}
