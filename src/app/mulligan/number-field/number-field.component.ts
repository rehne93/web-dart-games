import {Component, Input, OnInit} from '@angular/core';
import {MulliganService} from '../mulligan.service';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.css']
})
export class NumberFieldComponent implements OnInit {


  @Input() isBull: boolean = false;

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
    }
    const num = Math.floor(Math.random() * 20 + 1);
    if (!this.mulliganService.numberUsed(num)) {
      this.targetNumber = num;
      this.mulliganService.insertNumber(this.targetNumber);
      return;
    } else {
      this.ngOnInit();
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
