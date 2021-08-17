import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaModel } from 'src/app/categoria/categoria-model';
import { CategoriaViewService } from 'src/app/categoria/view/categoria-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-categoria-view',
  templateUrl: './categoria-view.component.html',
})
export class CategoriaViewComponent implements OnInit {
  constructor(
    private service: CategoriaViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return CategoriaModel.presenter(row, fieldName);
  }

  get fields() {
    return CategoriaModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.categoria.menu'), '/categoria'],
    [i18n('entities.categoria.view.title')],
  ];
}
