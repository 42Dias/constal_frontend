import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AuthCurrentTenant from 'src/app/auth/auth-current-tenant';
import { AuthService } from 'src/app/auth/auth.service';
import authAxios from 'src/app/shared/axios/auth-axios';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  produto: any = [];

  constructor(private authService: AuthService,
    private router: Router,) {}

  async ngOnInit() {
    this.produto = await DashboardComponent.listProduto()
    await DashboardComponent.listCategoria()
  }

  static async listProduto() {

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/produto?limit=15`,
    );
    
    return response.data.rows;
  }

  static async listCategoria() {

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/categoria`,
    );

    // /produto?filter%5Bcategoria%5D=25970959-129d-4b83-8a2a-6f050f27da0e
    
    
    return response.data.rows;
  }
  
  sendToCatalog(param) {
    this.router.navigateByUrl(`/produto?filter%5Bcategoria%5D=${param}`);
  }

  verifyImage(image) {
    if (image.length > 0) {
      return image[0].downloadUrl
    } else {
      return 'assets/images/noImage.png'
    }
  }

  sameUrl(param) {
    window.location.href = `/produto/${param}`
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
