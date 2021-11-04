import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import AuthCurrentTenant from 'src/app/auth/auth-current-tenant';
import { AuthService } from 'src/app/auth/auth.service';
import authAxios from 'src/app/shared/axios/auth-axios';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
})
export class DetalhesComponent implements OnInit {
  detalhes: any;
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.produtos = [
      {
        name: 'Material',
        imagem: 'assets/images/material.jpg',
        preco: '132,00',
        desc: 'Muitos materiais de contrução.',
      },
      {
        name: 'Ferramentas',
        imagem: 'assets/images/tools.png',
        preco: '75,30',
        desc: 'Ferramentas para todos os gostos e para todas as necessidades!',
      },
    ];
  }

  async ngOnInit() {
    let urlId = this.activatedRoute.snapshot.params.id;

    await this.getDetalhes(urlId);
  }

  async getDetalhes(id) {
    try {
      this.detalhes = null;

      const tenantId = AuthCurrentTenant.get();

      const response = await authAxios.get(
        `/tenant/${tenantId}/pedido/${id}`,
      );

      this.detalhes = response.data;
      console.log(this.detalhes);
    } catch (error) {
      this.detalhes = null;
    }
  }

  async aprovar(){
    try {
      let id = this.activatedRoute.snapshot.params.id;
      let data = null;

      data =  {
        status: 'entregue'
      }

      const tenantId = AuthCurrentTenant.get();

      const response = await authAxios.put(
        `/tenant/${tenantId}/pedido/${id}`,
        {
          data
        }
      );
      
      window.location.href = '/vendas'
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async reprovar(){
    try {
      let id = this.activatedRoute.snapshot.params.id;
      let data = null;

      data =  {
        status: "cancelado"
      }

      const tenantId = AuthCurrentTenant.get();

      const response = await authAxios.put(
        `/tenant/${tenantId}/pedido/${id}`,
        {
          data
        }
      );

      window.location.href = '/vendas'
      return response.data

    } catch (error) {
      console.log(error)
    }
  }

  produtos: Array<any> = [];
  categoriaOn: boolean = false;
  corOn: boolean = false;
  marcaOn: boolean = false;



  tradeView(param) {
    if (param == 'categoria') {
      if (this.categoriaOn == false) {
        this.categoriaOn = true;
      } else {
        this.categoriaOn = false;
      }
    } else if (param == 'cor') {
      if (this.corOn == false) {
        this.corOn = true;
      } else {
        this.corOn = false;
      }
    } else if (param == 'marca') {
      if (this.marcaOn == false) {
        this.marcaOn = true;
      } else {
        this.marcaOn = false;
      }
    }
  }
}
