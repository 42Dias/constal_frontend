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
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
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
