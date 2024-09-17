import { Component, computed, inject, signal } from '@angular/core';
import { TemperatureService } from '../../services/temperature/temperature.service';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css'
})
export class TemperatureComponent {
  temperatureService = inject(TemperatureService);

  constructor() {
    console.log(this.convertirListeCelsiusEnFarhenheit([10, 40, 60]));
  }

  title = 'Hello, angular-starter';
  celsius = signal(25);
  //fahrenheit = computed(() => this.celsius() * 1.8 + 32);
  fahrenheit = computed(() =>
    this.temperatureService.celsiusToFahrenheit(this.celsius())
  );

  doubleCelsius() {
    this.celsius.update((celsius) => celsius * 2);
    // this.celsius.set(this.celsius() * 2); // on peut aussi faire comme ça, ça revient au même
  }

  convertirListeCelsiusEnFarhenheit(celsiusList: number[]) {
    // let celsiusList: number[] = [10, 40, 60];
    return celsiusList.map((celsius) =>
      this.temperatureService.celsiusToFahrenheit(celsius)
    );
    // console.log(
    //   this.temperatureService.celsiusToFahrenheitFromList(celsiusList)
    // );
  }
}
