import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PessoaFisicaModel } from 'src/app/pessoa-fisica/pessoa-fisica-model';
import { PessoaFisicaViewService } from 'src/app/pessoa-fisica/view/pessoa-fisica-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-pessoa-fisica-view',
  templateUrl: './pessoa-fisica-view.component.html',
})
export class PessoaFisicaViewComponent implements OnInit {
  constructor(
    private service: PessoaFisicaViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return PessoaFisicaModel.presenter(row, fieldName);
  }

  get fields() {
    return PessoaFisicaModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.pessoaFisica.menu'), '/pessoa-fisica'],
    [i18n('entities.pessoaFisica.view.title')],
  ];
}
