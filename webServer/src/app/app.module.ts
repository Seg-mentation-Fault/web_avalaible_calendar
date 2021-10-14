import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './numberImputCapture/app.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { AppCalendar } from './calendar/calendar.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarcomponentComponent,
    AppCalendar,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppCalendar]
})
export class AppModule { }
