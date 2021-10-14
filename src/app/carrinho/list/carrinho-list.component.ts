import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';
import AuthCurrentTenant from 'src/app/auth/auth-current-tenant';
import authAxios from 'src/app/shared/axios/auth-axios';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho-list',
  templateUrl: './carrinho-list.component.html',
})
export class CarrinhoListComponent implements OnInit {
  constructor(private authService: AuthService, private location: Location, private route: Router) {}

  produtos: any;
  total = 0;

  async ngOnInit() {
    await this.listCarrinho();
    this.somaTotal()
    console.log(this.total)
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.carrinho.menu')],
  ];

  somaTotal(){
    for (let produto of this.produtos) {
      let total = 0;
      let quantidade = 0;
      let subtotal = 0;

      quantidade = parseFloat(produto.quantidade)
      subtotal = produto.produto.preco * quantidade

      // console.log(typeof(subtotal))
      total += subtotal
      console.log(total)

      this.total += total
    }
  }

  async listCarrinho() {
    
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/carrinho`
    );  
    
    this.produtos = response.data.rows;

    console.log(response.data)
    return response.data.rows;
  }

  async excluirPedidoCarrinho(id) {
    
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.delete(
      `/tenant/${tenantId}/carrinho?ids%5B%5D=${id}`, 
    );  
    // this.produtos = response.data.rows;

    console.log(response.data)
    window.location.reload();
    // return response.data.rows;
  }
  
  editarPedido(id){
    this.route.navigate(['/produto', `${id}`]);
  }
}
