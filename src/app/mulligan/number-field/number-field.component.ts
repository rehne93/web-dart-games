import {Component, Input, OnInit} from '@angular/core';
import {MulliganService} from '../mulligan.service';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.css']
})
export class NumberFieldComponent implements OnInit {


  @Input() isBull: boolean = false;

  @Input() value: number = 0;

  /**
   * Anzuvisierende Nummer
   */
  targetNumber: number = 0;


  /**
   * Notwendige Treffer
   */
  hitsNeccassary: number = 3;


  constructor(public mulliganService: MulliganService) {
  }

  ngOnInit(): void {
    if (this.isBull) {
      this.targetNumber = 25;
      return;
    } else{
      this.targetNumber = this.value;
    }

  }


  /**
   * Ziel getroffen
   */
  hitTarget() {
    if (this.hitsNeccassary !== 0) {
      this.hitsNeccassary--;
    }
  }

  /**
   * Treffer rückgängig machen
   */
  unHitTarget() {
    if (this.hitsNeccassary !== 3) {
      this.hitsNeccassary++;
    }
  }

}
