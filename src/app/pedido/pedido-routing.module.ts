import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { PedidoListComponent } from 'src/app/pedido/list/pedido-list.component';
import { PedidoViewComponent } from 'src/app/pedido/view/pedido-view.component';
import { PedidoImporterComponent } from 'src/app/pedido/importer/pedido-importer.component';
import { PedidoFormPageComponent } from 'src/app/pedido/form/pedido-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: PedidoFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.pedidoEdit,
        },
      },
      {
        path: 'new',
        component: PedidoFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.pedidoCreate,
        },
      },
      {
        path: 'import',
        component: PedidoImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.pedidoImport,
        },
      },
      {
        path: ':id',
        component: PedidoViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.pedidoRead,
        },
      },
      {
        path: '',
        component: PedidoListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.pedidoRead,
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
export class PedidoRoutingModule {}

export const routedComponents = [
  PedidoListComponent,
  PedidoFormPageComponent,
  PedidoViewComponent,
  PedidoImporterComponent,
];
