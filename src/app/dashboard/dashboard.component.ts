import { Component, OnInit } from '@angular/core';
import AuthCurrentTenant from 'src/app/auth/auth-current-tenant';
import { AuthService } from 'src/app/auth/auth.service';
import authAxios from 'src/app/shared/axios/auth-axios';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  produto: any;

  constructor(private authService: AuthService,
  ) {
    /* this.images = [
      { name: 'http://lorempixel.com/640/480/animals/' },
      { name: 'https://www.jasminealimentos.com/wp-content/uploads/2017/09/tipos-de-frutas-1-860x485.jpg' },
      { name: 'http://lorempixel.com/640/480/business/' },
      { name: 'http://lorempixel.com/640/480/cats/' },
      { name: 'http://lorempixel.com/640/480/city/' },
      { name: 'http://lorempixel.com/640/480/food/' },
      { name: 'http://lorempixel.com/640/480/nightlife/' },
      { name: 'http://lorempixel.com/640/480/fashion/' },
      { name: 'http://lorempixel.com/640/480/people/' },
      { name: 'http://lorempixel.com/640/480/nature/' },
      { name: 'http://lorempixel.com/640/480/sports/' },
      { name: 'http://lorempixel.com/640/480/transport/' },
    ] */
    this.images2 = [
      /* { name: 'http://lorempixel.com/640/480/animals/' },
      { name: 'http://lorempixel.com/640/480/abstract/' },
      { name: 'http://lorempixel.com/640/480/business/' },
      { name: 'http://lorempixel.com/640/480/cats/' },
      { name: 'http://lorempixel.com/640/480/city/' },
      { name: 'http://lorempixel.com/640/480/food/' },
      { name: 'http://lorempixel.com/640/480/nightlife/' },
      { name: 'http://lorempixel.com/640/480/fashion/' },
      { name: 'http://lorempixel.com/640/480/people/' },
      { name: 'http://lorempixel.com/640/480/nature/' },
      { name: 'http://lorempixel.com/640/480/sports/' },
      { name: 'http://lorempixel.com/640/480/transport/' }, */
    ]
  }

  async ngOnInit() {
    this.produto = await DashboardComponent.list()
  }
  images: Array<any> = []
  images2: Array<any> = []

  static async list() {

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/produto?limit=15`,
    );
    
    console.log(response.data.rows);
    
    return response.data.rows;
  }
  
  verifyImage(image) {
    if (image.length > 0) {
      return image[0].downloadUrl
    } else {
      return 'assets/images/noImage.png'
    }
  }

  transformValue(value) {
    if (value != undefined) {
      value = (value * 100) / 100

      return (value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      }))
    }
  }
}
