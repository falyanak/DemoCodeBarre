import { Routes } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { TemperatureComponent } from './components/temperature/temperature.component';

export const routes: Routes = [
    { path: '', component: CardListComponent },
    { path: 'degres', component: TemperatureComponent }  
];

// export const routes: Routes = [
//   {
//     path: '',
//     loadComponent: () =>
//       import('./components/card-list/card-list.component').then(
//         ({ CardListComponent }) => CardListComponent
//       ),
//   },
// ];
