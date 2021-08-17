import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-carrinho-importer',
  templateUrl: './carrinho-importer.component.html',
})
export class CarrinhoImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.carrinho.menu'), '/carrinho'],
    [i18n('entities.carrinho.importer.title')],
  ];
}
