import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-empresa-importer',
  templateUrl: './empresa-importer.component.html',
})
export class EmpresaImporterComponent {
  constructor(private authService: AuthService) {}

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.empresa.menu'), '/empresa'],
    [i18n('entities.empresa.importer.title')],
  ];
}
