import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-produto-importer',
  templateUrl: './produto-importer.component.html',
})
export class ProdutoImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.produto.menu'), '/produto'],
    [i18n('entities.produto.importer.title')],
  ];
}
