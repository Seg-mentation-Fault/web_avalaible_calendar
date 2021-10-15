import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './numberImputCapture/app.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { AppCalendar } from './calendar/calendar.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ParksComponent } from './parks/parks.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarcomponentComponent,
    AppCalendar,
    ParksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppCalendar, ParksComponent]
})
export class AppModule { }
