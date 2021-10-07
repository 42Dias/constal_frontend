import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { ProdutoListComponent } from 'src/app/produto/list/produto-list.component';
import { ProdutoViewComponent } from 'src/app/produto/view/produto-view.component';
import { ProdutoImporterComponent } from 'src/app/produto/importer/produto-importer.component';
import { ProdutoFormPageComponent } from 'src/app/produto/form/produto-form-page.component';

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
        path: 'import',
        component: ProdutoImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.produtoImport,
        },
      },
      /* {
        path: ':id',
        component: ProdutoViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.produtoRead,
        },
      }, */
      {
        path: '',
        component: ProdutoListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.produtoRead,
        },
      },
      {
        path: ':id',
        component: ProdutoViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.produtoRead,
        },
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes),], 
  exports: [RouterModule],
  providers: [],
})
export class ProdutoRoutingModule {}

export const routedComponents = [
  ProdutoListComponent,
  ProdutoFormPageComponent,
  ProdutoViewComponent,
  ProdutoImporterComponent,
];
