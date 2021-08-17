import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-categoria-importer',
  templateUrl: './categoria-importer.component.html',
})
export class CategoriaImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.categoria.menu'), '/categoria'],
    [i18n('entities.categoria.importer.title')],
  ];
}
