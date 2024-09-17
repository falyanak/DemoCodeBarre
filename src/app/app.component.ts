import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { CardListComponent } from './components/card-list/card-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemperatureComponent, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 
}
