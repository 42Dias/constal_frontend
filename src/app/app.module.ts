import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import {
  AppRoutingModule,
  routedComponents,
} from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AppComponent, ...routedComponents],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    Ng2CarouselamosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
