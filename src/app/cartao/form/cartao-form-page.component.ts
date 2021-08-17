import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { i18n } from 'src/i18n';
import { CartaoFormPageService } from 'src/app/cartao/form/cartao-form-page.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-cartao-form-page',
  templateUrl: './cartao-form-page.component.html',
})
export class CartaoFormPageComponent implements OnInit {
  constructor(
    private service: CartaoFormPageService,
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
    [i18n('entities.cartao.menu'), '/cartao'],
    [
      this.isEditing
        ? i18n('entities.cartao.edit.title')
        : i18n('entities.cartao.new.title'),
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
    this.router.navigate(['/cartao']);
  }
}
