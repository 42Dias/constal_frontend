import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoModel } from 'src/app/pedido/pedido-model';
import { PedidoViewService } from 'src/app/pedido/view/pedido-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-pedido-view',
  templateUrl: './pedido-view.component.html',
})
export class PedidoViewComponent implements OnInit {
  constructor(
    private service: PedidoViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return PedidoModel.presenter(row, fieldName);
  }

  get fields() {
    return PedidoModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.pedido.menu'), '/pedido'],
    [i18n('entities.pedido.view.title')],
  ];
}
