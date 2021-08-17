import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { PessoaFisicaListComponent } from 'src/app/pessoa-fisica/list/pessoa-fisica-list.component';
import { PessoaFisicaViewComponent } from 'src/app/pessoa-fisica/view/pessoa-fisica-view.component';
import { PessoaFisicaImporterComponent } from 'src/app/pessoa-fisica/importer/pessoa-fisica-importer.component';
import { PessoaFisicaFormPageComponent } from 'src/app/pessoa-fisica/form/pessoa-fisica-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: PessoaFisicaFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.pessoaFisicaEdit,
        },
      },
      {
        path: 'new',
        component: PessoaFisicaFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.pessoaFisicaCreate,
        },
      },
      {
        path: 'import',
        component: PessoaFisicaImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.pessoaFisicaImport,
        },
      },
      {
        path: ':id',
        component: PessoaFisicaViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.pessoaFisicaRead,
        },
      },
      {
        path: '',
        component: PessoaFisicaListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.pessoaFisicaRead,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PessoaFisicaRoutingModule {}

export const routedComponents = [
  PessoaFisicaListComponent,
  PessoaFisicaFormPageComponent,
  PessoaFisicaViewComponent,
  PessoaFisicaImporterComponent,
];
