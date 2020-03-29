import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MulliganService {

  currentNumbers: number[] = [];


  constructor() {
  }


  public insertNumber(num: number) {
    this.currentNumbers.push(num);
  }

  public numberUsed(num: number): boolean {
    return this.currentNumbers.indexOf(num) !== -1;
  }
  
  public resetNumbers() {
    this.currentNumbers = [];
  }
}
