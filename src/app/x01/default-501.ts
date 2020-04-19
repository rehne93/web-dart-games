import {X01Data} from './x01-data';

export class Default501 implements X01Data {

  readonly START_SCORE = 501;
  private scoreLeft: number = this.START_SCORE;
  private dartsThrown: number = 0;
  private totalScore: number = 0;
  private totalDartsThrown: number = 0;


  getAverage(): number {
    if(this.totalDartsThrown === 0){
      return 0;
    }
    return this.totalScore/(this.totalDartsThrown/3);
  }

  getDartsThrown(): number {
    return this.dartsThrown;
  }

  getScoreLeft(): number {
    return this.scoreLeft;
  }

  /**
   * Validiert auf scoreleft - score < 0 und score < 0 oder > 180
   * @param score
   * @param numOfDarts
   */
  scoreEntered(score: number, numOfDarts: number = 3): boolean {
    if (this.scoreLeft - score < 0) {
      // Nichts tun, falsche eingabe
      return false;
    }
    if (score < 0 || score > 180) {
      return false;
    }

    this.scoreLeft -= score;
    this.totalScore+= score;
    this.dartsThrown += numOfDarts;
    this.totalDartsThrown += numOfDarts;
    return true;
  }

  getStartingScore(): number {
    return this.START_SCORE;
  }

  isFinished(): boolean {
    return this.scoreLeft === 0;
  }

  restart() {
    this.scoreLeft = this.START_SCORE;
    this.dartsThrown = 0;
  }

}
