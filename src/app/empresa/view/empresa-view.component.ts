import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresaModel } from 'src/app/empresa/empresa-model';
import { EmpresaViewService } from 'src/app/empresa/view/empresa-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-empresa-view',
  templateUrl: './empresa-view.component.html',
})
export class EmpresaViewComponent implements OnInit {
  constructor(
    private service: EmpresaViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    console.log(row);
    console.log(fieldName);
    
    
    return EmpresaModel.presenter(row, fieldName);
  }

  get fields() {
    return EmpresaModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.empresa.menu'), '/empresa'],
    [i18n('entities.empresa.view.title')],
  ];
}
