import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './numberImputCapture/app.component';
import { NavbarcomponentComponent } from './navbar/navbart.component';

@NgModule({
  declarations: [
    NavbarcomponentComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
