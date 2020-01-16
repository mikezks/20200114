import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-booking',
        loadChildren: () => import('./flight-booking/flight-booking.module')
            .then(m => m.FlightBookingModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
