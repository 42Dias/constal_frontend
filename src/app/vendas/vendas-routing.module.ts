import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendasComponent } from 'src/app/vendas/vendas.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: VendasComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class VendasRoutingModule {}

export const routedComponents = [VendasComponent];
