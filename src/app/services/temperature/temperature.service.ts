import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemperatureService {
  constructor() {}

  celsiusToFahrenheit(celsius: number) {
    console.log(`conversion de ${celsius} degrés celsius en fahrenheit`);
    return celsius * 1.8 + 32;
  }

  celsiusToFahrenheitFromList0(celsiusList: number[]) {
    let listResult: number[] = [];

    for (var elt of celsiusList) {
      console.log(`conversion de ${elt} degrés celsius en fahrenheit`);
      const conv = this.celsiusToFahrenheit(elt);
      // listResult.push(conv);
      listResult = [...listResult, elt];
    }
    console.log(listResult);
    return listResult;
  }

  celsiusToFahrenheitFromList(celsiusList: number[]) {
    let listResult: number[] = celsiusList.map((tmp) =>
      this.celsiusToFahrenheit(tmp)
    );
    console.log(`listResult de celsisus en farhenheit = ${listResult}`);
    return listResult;
  }
}
