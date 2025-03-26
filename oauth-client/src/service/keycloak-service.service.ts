import { Injectable } from '@angular/core';
import Keycloak from "keycloak-js"
import { keycloack } from '../config/keycloack';

@Injectable({
  providedIn: 'root'
})
export class KeycloakServiceService {

  keycloakInstance: Keycloak;

  constructor() {
    this.keycloakInstance = keycloack;
   }

  

  init(): Promise<boolean> {
    return this.keycloakInstance.init({
        onLoad: 'login-required',
        pkceMethod: 'S256'
    });
}

getKeycloakInstance(): Keycloak{
    return this.keycloakInstance;
}


}
