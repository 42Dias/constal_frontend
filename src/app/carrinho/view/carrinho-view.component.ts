import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoModel } from 'src/app/carrinho/carrinho-model';
import { CarrinhoViewService } from 'src/app/carrinho/view/carrinho-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-carrinho-view',
  templateUrl: './carrinho-view.component.html',
})
export class CarrinhoViewComponent implements OnInit {
  constructor(
    private service: CarrinhoViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {
    this.produtos = [
      { name: 'Material', imagem: 'assets/images/material.jpg', preco: '132,00', desc: 'Muitos materiais de contrução.', quant: 3 },
      { name: 'Ferramentas', imagem: 'assets/images/tools.png', preco: '75,30', desc: 'Ferramentas para todos os gostos e para todas as necessidades!', quant: 1 },
    ]

    this.images = [
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
    ]
  }

  quantity: any;
  preco: any;
  presente: any;

  produtos: Array<any> = []
  images: Array<any> = []

  async ngOnInit() {
    this.quantity = 1;  
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  upQuantity(preco) {
    this.quantity+= 1;
    this.presente = preco;
    this.presente *= this.quantity;
    this.presente = this.presente.toFixed(2);
  }

  downQuantity(preco) {
    if (this.quantity > 1){
      this.quantity-= 1;
    }
    this.presente = preco;
    this.presente*=this.quantity;
    this.presente = this.presente.toFixed(2);
  }  

 getPrice(preco, quant) {
  let precos = preco
  let total:any
  precos.replace(",", ".");
  precos = parseFloat(preco);

  total = precos * quant
  total = total.toFixed(2);
  return total
 }

  presenter(row, fieldName) {
    return CarrinhoModel.presenter(row, fieldName);
  }

  get fields() {
    return CarrinhoModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.carrinho.menu'), '/carrinho'],
    [i18n('entities.carrinho.view.title')],
  ];
}
