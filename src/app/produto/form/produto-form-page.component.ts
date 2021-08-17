import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { i18n } from 'src/i18n';
import { ProdutoFormPageService } from 'src/app/produto/form/produto-form-page.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-produto-form-page',
  templateUrl: './produto-form-page.component.html',
})
export class ProdutoFormPageComponent implements OnInit {
  constructor(
    private service: ProdutoFormPageService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doInit(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  get isEditing() {
    return this.route.snapshot.paramMap.has('id');
  }

  get initLoading() {
    return this.service.initLoading;
  }

  get saveLoading() {
    return this.service.saveLoading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.produto.menu'), '/produto'],
    [
      this.isEditing
        ? i18n('entities.produto.edit.title')
        : i18n('entities.produto.new.title'),
    ],
  ];

  doSave(payload) {
    if (this.isEditing) {
      return this.service.doUpdate(
        payload.id,
        payload.values,
      );
    } else {
      return this.service.doCreate(payload.values);
    }
  }

  doCancel() {
    this.router.navigate(['/produto']);
  }
}
