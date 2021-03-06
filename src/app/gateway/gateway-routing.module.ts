import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewayComponent } from 'src/app/gateway/gateway.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LayoutComponent } from 'src/app/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: GatewayComponent,
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
export class GatewayRoutingModule {}

export const routedComponents = [GatewayComponent];
