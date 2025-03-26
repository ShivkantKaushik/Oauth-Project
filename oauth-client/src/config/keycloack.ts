import Keycloak from "keycloak-js"


export const keycloack = new Keycloak( {
    url: 'http://localhost:9192',
    realm: 'Demo-Oauth',
    clientId: 'demo-oauth-client-id-123',
} );