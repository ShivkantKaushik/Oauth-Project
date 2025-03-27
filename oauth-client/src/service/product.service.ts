import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import Keycloak from 'keycloak-js';
import { KeycloakServiceService } from './keycloak-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private keycloakService: KeycloakServiceService) { }

  fetchAllProducts(){

    let token = this.keycloakService.getKeycloakInstance().token;
    console.log("Token in fetchAllProducts ", token);

    let headers: HttpHeaders = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });
    
    
    
    return this.http.get("http://localhost:8080/api/v1/products/get-all-products", {headers: headers, observe: 'response'});
  }

  
}
