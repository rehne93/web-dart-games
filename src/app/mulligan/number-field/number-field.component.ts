import {Component, OnInit} from '@angular/core';
import {MulliganService} from '../mulligan.service';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.css']
})
export class NumberFieldComponent implements OnInit {


  /**
   * Anzuvisierende Nummer
   */
  targetNumber: number = 0;


  hitsNeccassary: number = 3;


  constructor(public mulliganService: MulliganService) {
  }

  ngOnInit(): void {
    const num = Math.floor(Math.random() * 20 + 1);
    if (!this.mulliganService.numberUsed(num)) {
      this.targetNumber = num;
      this.mulliganService.insertNumber(this.targetNumber);
      return;
    } else {
      this.ngOnInit();
    }
  }


  hitTarget() {
    if (this.hitsNeccassary !== 0) {
      this.hitsNeccassary--;
    }
  }

}
