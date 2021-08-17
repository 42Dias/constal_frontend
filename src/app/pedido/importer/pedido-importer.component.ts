import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-pedido-importer',
  templateUrl: './pedido-importer.component.html',
})
export class PedidoImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.pedido.menu'), '/pedido'],
    [i18n('entities.pedido.importer.title')],
  ];
}
