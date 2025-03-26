import { Component, OnInit } from '@angular/core';
import { KeycloakServiceService } from '../service/keycloak-service.service';
import Keycloak from "keycloak-js"
import { keycloack } from '../config/keycloack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'oauth-client';

  keycloakInstance: Keycloak;

  constructor( private keycloakService: KeycloakServiceService ){
    this.keycloakInstance = keycloack;
  }



  ngOnInit(){
    this.keycloakService.init().then(authenticated => {
      if (authenticated) {
          console.log('User authenticated');


          const token = this.keycloakService.getKeycloakInstance().token;
          console.log('User token:', token);


      } else {
          console.log('User not authenticated');
          this.keycloakInstance.login();
      }
  }).catch(err => {
      console.error('Error during Keycloak initialization:', err);
  });



}
  

}

