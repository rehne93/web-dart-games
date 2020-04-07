import {Component, Input, OnInit} from '@angular/core';
import {X01Data} from '../x01-data';
import {Default501} from '../default-501';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-x01',
  templateUrl: './x01.component.html',
  styleUrls: ['./x01.component.css']
})
export class X01Component implements OnInit {

  readonly ERROR_INVALID_SCORE = 'Ungültige Eingabe';
  @Input() x01Data: X01Data;

  inputScore: number;

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    if (!this.x01Data) {
      this.x01Data = new Default501();
    }
  }


  /**
   * Gibt eine Fehlermeldung aus, falls der Score invalide ist
   */
  scoreInput() {
    const isValid = this.x01Data.scoreEntered(this.inputScore, 3);
    if (!isValid) {
      this.snackBar.open(this.ERROR_INVALID_SCORE, '', {duration: 3000});
    } else {
      this.inputScore = null;

    }
  }

}
