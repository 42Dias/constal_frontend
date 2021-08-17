import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartaoModel } from 'src/app/cartao/cartao-model';
import { CartaoViewService } from 'src/app/cartao/view/cartao-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-cartao-view',
  templateUrl: './cartao-view.component.html',
})
export class CartaoViewComponent implements OnInit {
  constructor(
    private service: CartaoViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return CartaoModel.presenter(row, fieldName);
  }

  get fields() {
    return CartaoModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.cartao.menu'), '/cartao'],
    [i18n('entities.cartao.view.title')],
  ];
}
