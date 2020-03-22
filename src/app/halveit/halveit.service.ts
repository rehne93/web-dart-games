import {Injectable} from '@angular/core';
import {HalveItStep} from './halveit';

@Injectable({
  providedIn: 'root'
})
export class HalveitService {

  readonly SCORES = ['15', '16', '17', '18', '19', '20', '25'];
  readonly SPECIALS = ['DB', 'TP'];

  constructor() {
  }


  /**
   * Validiert den eingegebenen Score durch Modulorechnungen.
   *
   * TODO: Refactoren um Number(..) wegzubekommen
   * @param step aktueller currentStep
   * @param value Eingegebener Wert
   */
  validateScore(step: number, value: string) {
    const currentStep = this.getValueForStep(step);
    if (Number(value) === 0) {
      return false;
    }
    if (!currentStep.isSpecialStep) {
      if (Number(value) % Number(currentStep.value) === 0 && Number(value) <= Number(currentStep.value) * 9) {
        return true;
      }
    } else {
      if (currentStep.value === 'DB') {
        if (Number(value) % 2 === 0) {
          return true;
        }
      } else if (currentStep.value === 'TP') {
        if (Number(value) % 3 === 0) {
          return true;
        }
      }
    }
    return false;
  }


  /**
   * Gibt für den übergebenen Step den Scorewert zurück.
   * @param id Momentaner Schritt von 1 bis einschl. 9
   */
  getValueForStep(id: number): HalveItStep {
    switch (id) {
      case 1:
        return new HalveItStep((this.SCORES[0]));
      case 2:
        return new HalveItStep(this.SCORES[1]);
      case 4:
        return new HalveItStep(this.SCORES[2]);
      case 5:
        return new HalveItStep(this.SCORES[3]);
      case 7:
        return new HalveItStep(this.SCORES[4]);
      case 8:
        return new HalveItStep(this.SCORES[5]);
      case 3:
        return new HalveItStep(this.SPECIALS[0], true);
      case 6:
        return new HalveItStep(this.SPECIALS[1], true);
      case 9:
        return new HalveItStep(this.SCORES[6]);
      default:
        return new HalveItStep('');
    }
  }
}
