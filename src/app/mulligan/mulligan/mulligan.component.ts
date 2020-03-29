import {Component, OnInit} from '@angular/core';
import {faQuestion} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mulligan',
  templateUrl: './mulligan.component.html',
  styleUrls: ['./mulligan.component.css']
})
export class MulliganComponent implements OnInit {

  readonly ANLEITUNG = 'Beim Mulligan ist das Ziel, bei allen 6 Zahlen das Trippel sowie das Bulls-Eye je drei mal zu treffen. Für Anfänger können auch die Einzelzahlen drei Mal getroffen werden. ';
  questionIcon = faQuestion;

  constructor() {
  }

  ngOnInit(): void {
  }


  refresh() {
    window.location.reload();
  }

}
