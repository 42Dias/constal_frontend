import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-pessoa-fisica-importer',
  templateUrl: './pessoa-fisica-importer.component.html',
})
export class PessoaFisicaImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.pessoaFisica.menu'), '/pessoa-fisica'],
    [i18n('entities.pessoaFisica.importer.title')],
  ];
}
