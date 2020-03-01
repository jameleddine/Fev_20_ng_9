import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { AuthService } from './auth.service';
// import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    Home2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // LayoutModule
  ],
  
  providers:[AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
