import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoEmpresaComponent } from 'src/app/produtoEmpresa/produtoEmpresa.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { ProdutoViewComponent } from '../produto/view/produto-view.component';
import { PermissionGuard } from '../auth/permission.guard';
import { ProdutoFormPageComponent } from '../produto/form/produto-form-page.component';
import { Permissions } from 'src/security/permissions';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: ProdutoFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.produtoEdit,
        },
      },
      {
        path: 'new',
        component: ProdutoFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.produtoCreate,
        },
      },
      {
        path: '',
        component: ProdutoEmpresaComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: ':id',
    component: ProdutoViewComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: {
      permission: Permissions.values.produtoRead,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProdutoEmpresaRoutingModule {}

export const routedComponents = [ProdutoEmpresaComponent];
