import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MulliganService {

  constructor() {
  }

  public createNumbers():number[] {
    const numbers = [];
    while (numbers.length < 6) {
      const num = Math.floor(Math.random() * 20 + 1);
      if (numbers.indexOf(num) === -1) {
        numbers.push(num);
      } else {
      }
    }
    return numbers;
  }
}
