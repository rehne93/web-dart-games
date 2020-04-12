import {Component, OnInit} from '@angular/core';
import {faQuestion} from '@fortawesome/free-solid-svg-icons';
import { MulliganService } from '../mulligan.service';

@Component({
  selector: 'app-mulligan',
  templateUrl: './mulligan.component.html',
  styleUrls: ['./mulligan.component.css']
})
export class MulliganComponent implements OnInit {


  public shownNumbers: number[] = [];
  public numberHelpArray: number[] = [0,1,2,3,4,5];
  readonly ANLEITUNG = 'Beim Mulligan ist das Ziel, bei allen 6 Zahlen das Trippel sowie das Bulls-Eye je drei mal zu treffen. Für Anfänger können auch die Einzelzahlen drei Mal getroffen werden. ';
  questionIcon = faQuestion;

  constructor(private mulliganService: MulliganService) {
  }

  ngOnInit(): void {
    this.shownNumbers = [... this.mulliganService.createNumbers()];
  }


}
