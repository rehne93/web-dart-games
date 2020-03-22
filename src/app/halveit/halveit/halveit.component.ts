import {Component, OnInit} from '@angular/core';
import {HalveitService} from '../halveit.service';
import {HalveItStep} from '../halveit';
import {MatSnackBar} from '@angular/material/snack-bar';
import {faQuestion} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-halveit',
  templateUrl: './halveit.component.html',
  styleUrls: ['./halveit.component.css']
})
export class HalveitComponent {


  readonly ANLEITUNG = 'Begonnen wird mit 40 Punkten.\n' +
    '    Für jedes angegebene Ziel stehen 3 Darts zur Verüfung. Wenn das Ziel mit keinem\n' +
    '      Dart getroffen wurde, wird der momentane Score halbiert.';

  readonly INPUT = 'Als Score wird einfach die Punktzahl eingegeben, die getroffen wurde. Bei zwei Treffern auf die 15 bspw. 30. ' +
    'Bei invaliden Eingaben wird der Score als falsch gewertet und halbiert.';

  currentStep: number = 1;
  currentScore: number = 40;
  currentStepObject: HalveItStep = this.halveItService.getValueForStep(this.currentStep);
  inputScore: string = '';
  finished: boolean = false;
  questionIcon = faQuestion;

  constructor(public halveItService: HalveitService, public matSnackBar: MatSnackBar) {
  }

  /**
   * Geht zum nächsten Schritt.
   */
  nextStep() {
    if (this.halveItService.validateScore(this.currentStep, this.inputScore)) {
      this.showSnackBar('Scored');
      this.currentScore += Number(this.inputScore);
    } else {
      this.showSnackBar('Halve it!');
      this.currentScore = Math.floor(this.currentScore / 2);
    }
    this.setNextStep();
  }

  /**
   * Setzt den nächsten Schritt.
   * Beim letzten Schritt wird finished auf true gesetzt.
   */
  private setNextStep() {
    if (this.currentStep <= 8) {
      this.currentStep++;
      this.currentStepObject = this.halveItService.getValueForStep(this.currentStep);
      this.clearInput();
    } else {
      this.finished = true;
    }
  }

  /**
   * Setzt alle Werte zurück um ein neues Spiel zu starten
   */
  startNewGame() {
    this.finished = false;
    this.currentStep = 1;
    this.currentStepObject = this.halveItService.getValueForStep(this.currentStep);
    this.currentScore = 40;
    this.clearInput();
  }


  /**
   * Leert den Input.
   */
  clearInput() {
    this.inputScore = '';
  }


  showSnackBar(content: string) {
    this.matSnackBar.open(content, null, {duration: 2000});
  }
}
