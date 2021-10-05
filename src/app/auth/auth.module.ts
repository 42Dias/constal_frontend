import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  AuthRoutingModule,
  routedComponents,
} from 'src/app/auth/auth-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { TenantSelectFormComponent } from 'src/app/auth/tenant/tenant-select-form.component';
import { TenantNewFormComponent } from 'src/app/auth/tenant/tenant-new-form.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [SharedModule, AuthRoutingModule, LayoutModule, MatInputModule],
  declarations: [
    ...routedComponents,
    TenantSelectFormComponent,
    TenantNewFormComponent,
  ],
  providers: [],
})
export class AuthModule {}
