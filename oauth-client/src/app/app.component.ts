import { Component, OnInit } from '@angular/core';
import { KeycloakServiceService } from '../service/keycloak-service.service';
import Keycloak from "keycloak-js"
import { keycloack } from '../config/keycloack';
import { ProductService } from '../service/product.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  providers: [MessageService]
})
export class AppComponent implements OnInit{
  title = 'oauth-client';

  isAuthenticated: boolean = false;

  keycloakInstance: Keycloak;

  productList: any = [];

  constructor( private keycloakService: KeycloakServiceService,
                private productService: ProductService, private messageService: MessageService
   ){
    this.keycloakInstance = keycloack;
  }



  ngOnInit(){
    this.keycloakService.init().then(authenticated => {
      if (authenticated) {
          console.log('User authenticated');
          const token = this.keycloakService.getKeycloakInstance().token;
          console.log('User token:', token);

          this.fetchProducts();
          this.isAuthenticated = true;
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logged In Successfully!' });


      } else {
          console.log('User not authenticated');
          this.keycloakInstance.login();
      }
  }).catch(err => {
      console.error('Error during Keycloak initialization:', err);
  });



}


fetchProducts(){
    this.productService.fetchAllProducts().subscribe({
      next: (res: any) => {
        console.log("This is res in fetchAllProducts ", res);
        
        if(res.status == 200){
          res.body.forEach( (product: any) => {
            this.productList.push(product.name);
          });
        }

      }
    })
}

doLogOut(){
  this.keycloakInstance.logout();
  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logged Out Successfully!' });

}
  

}

