import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoModel } from 'src/app/produto/produto-model';
import { ProdutoViewService } from 'src/app/produto/view/produto-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-produto-view',
  templateUrl: './produto-view.component.html',
})
export class ProdutoViewComponent implements OnInit {
  constructor(
    private service: ProdutoViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return ProdutoModel.presenter(row, fieldName);
  }

  get fields() {
    return ProdutoModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.produto.menu'), '/produto'],
    [i18n('entities.produto.view.title')],
  ];
}
