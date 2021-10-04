import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-listaProdutos',
  templateUrl: './listaProdutos.component.html',
})
export class ListaProdutosComponent implements OnInit {
  constructor(private authService: AuthService,
  ) {
    this.produtos = [
      { name: 'Material', imagem: 'assets/images/material.jpg', preco: '132,00', desc: 'Muitos materiais de contrução.' },
      { name: 'Ferramentas', imagem: 'assets/images/tools.png', preco: '75,30', desc: 'Ferramentas para todos os gostos e para todas as necessidades!' },
    ]
  }

  ngOnInit() {
    /* document.getElementById('teste1').click(); */
  }

  produtos: Array<any> = []
  categoriaOn: boolean = false;
  corOn: boolean = false;
  marcaOn: boolean = false;

  tradeView(param) {
    if (param == 'categoria') {
      if (this.categoriaOn == false) {
        this.categoriaOn = true
      } else {
        this.categoriaOn = false
      }
    } else if ( param == 'cor') {
      if (this.corOn == false) {
        this.corOn = true
      } else {
        this.corOn = false
      }
    } else if (param == 'marca') {
      if (this.marcaOn == false) {
        this.marcaOn = true
      } else {
        this.marcaOn = false
      }
    }
  }
}
