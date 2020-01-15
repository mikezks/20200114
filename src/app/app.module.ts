import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { CoreModule } from './core/core.module';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      CoreModule,
      SharedModule,
      FlightBookingModule
   ],
   declarations: [
      AppComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
