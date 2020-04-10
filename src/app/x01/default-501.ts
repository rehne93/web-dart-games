import {X01Data} from './x01-data';

export class Default501 implements X01Data {

  readonly START_SCORE = 501;
  private scoreLeft: number = this.START_SCORE;
  private dartsThrown: number = 0;


  getAverage(): number {
    return 0;
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
    this.dartsThrown += numOfDarts;
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
