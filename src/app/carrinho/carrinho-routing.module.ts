import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { CarrinhoListComponent } from 'src/app/carrinho/list/carrinho-list.component';
import { CarrinhoViewComponent } from 'src/app/carrinho/view/carrinho-view.component';
import { CarrinhoImporterComponent } from 'src/app/carrinho/importer/carrinho-importer.component';
import { CarrinhoFormPageComponent } from 'src/app/carrinho/form/carrinho-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: CarrinhoFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.carrinhoEdit,
        },
      },
      {
        path: 'new',
        component: CarrinhoFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.carrinhoCreate,
        },
      },
      {
        path: 'import',
        component: CarrinhoImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.carrinhoImport,
        },
      },
      {
        path: ':id',
        component: CarrinhoViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.carrinhoRead,
        },
      },
      {
        path: '',
        component: CarrinhoListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.carrinhoRead,
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
export class CarrinhoRoutingModule {}

export const routedComponents = [
  CarrinhoListComponent,
  CarrinhoFormPageComponent,
  CarrinhoViewComponent,
  CarrinhoImporterComponent,
];
