import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './numberImputCapture/app.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { AppCalendar } from './calendar/calendar.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ParksComponent } from './parks/parks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormReservationComponent } from './form-reservation/form-reservation.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarcomponentComponent,
    AppCalendar,
    ParksComponent,
    FormReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    NgxQRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppCalendar, ParksComponent]
})
export class AppModule { }
