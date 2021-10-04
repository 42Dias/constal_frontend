import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css'],
})
export class ProdutoListComponent implements OnInit {

  role: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.role = this.authService.currentUser.tenants[0].roles[0];
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.produto.menu')],
  ];
}
