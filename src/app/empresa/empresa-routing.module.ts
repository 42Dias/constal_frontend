import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { PermissionGuard } from 'src/app/auth/permission.guard';
import { Permissions } from 'src/security/permissions';
import { EmpresaListComponent } from 'src/app/empresa/list/empresa-list.component';
import { EmpresaViewComponent } from 'src/app/empresa/view/empresa-view.component';
import { EmpresaImporterComponent } from 'src/app/empresa/importer/empresa-importer.component';
import { EmpresaFormPageComponent } from 'src/app/empresa/form/empresa-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ':id/edit',
        component: EmpresaFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.empresaEdit,
        },
      },
      {
        path: 'new',
        component: EmpresaFormPageComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.empresaCreate,
        },
      },
      {
        path: 'import',
        component: EmpresaImporterComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.empresaImport,
        },
      },
      {
        path: ':id',
        component: EmpresaViewComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.empresaRead,
        },
      },
      {
        path: '',
        component: EmpresaListComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: {
          permission: Permissions.values.empresaRead,
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
export class EmpresaRoutingModule {}

export const routedComponents = [
  EmpresaListComponent,
  EmpresaFormPageComponent,
  EmpresaViewComponent,
  EmpresaImporterComponent,
];
