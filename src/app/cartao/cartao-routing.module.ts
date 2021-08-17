import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { CartaoListComponent } from 'src/app/cartao/list/cartao-list.component';
import { CartaoViewComponent } from 'src/app/cartao/view/cartao-view.component';
import { CartaoImporterComponent } from 'src/app/cartao/importer/cartao-importer.component';
import { CartaoFormPageComponent } from 'src/app/cartao/form/cartao-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: CartaoFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.cartaoEdit,
        },
      },
      {
        path: 'new',
        component: CartaoFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.cartaoCreate,
        },
      },
      {
        path: 'import',
        component: CartaoImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.cartaoImport,
        },
      },
      {
        path: ':id',
        component: CartaoViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.cartaoRead,
        },
      },
      {
        path: '',
        component: CartaoListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.cartaoRead,
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
export class CartaoRoutingModule {}

export const routedComponents = [
  CartaoListComponent,
  CartaoFormPageComponent,
  CartaoViewComponent,
  CartaoImporterComponent,
];
