import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { CategoriaListComponent } from 'src/app/categoria/list/categoria-list.component';
import { CategoriaViewComponent } from 'src/app/categoria/view/categoria-view.component';
import { CategoriaImporterComponent } from 'src/app/categoria/importer/categoria-importer.component';
import { CategoriaFormPageComponent } from 'src/app/categoria/form/categoria-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: CategoriaFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.categoriaEdit,
        },
      },
      {
        path: 'new',
        component: CategoriaFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.categoriaCreate,
        },
      },
      {
        path: 'import',
        component: CategoriaImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.categoriaImport,
        },
      },
      {
        path: ':id',
        component: CategoriaViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.categoriaRead,
        },
      },
      {
        path: '',
        component: CategoriaListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.categoriaRead,
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
export class CategoriaRoutingModule {}

export const routedComponents = [
  CategoriaListComponent,
  CategoriaFormPageComponent,
  CategoriaViewComponent,
  CategoriaImporterComponent,
];
