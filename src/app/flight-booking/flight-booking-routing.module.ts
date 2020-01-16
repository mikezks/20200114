import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent,
        data: {
          label: 'Home'
        }
      },
      {
          path: 'flight-edit',
          component: FlightEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightBookingRoutingModule { }
