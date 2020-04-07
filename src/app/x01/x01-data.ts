export interface X01Data {

  getStartingScore(): number;

  getScoreLeft(): number;

  // Gibt zurück, ob der eingegebene Score valide war oder nicht
  scoreEntered(score: number, numOfDarts: number): boolean;

  getAverage(): number;

  getDartsThrown(): number;

  isFinished(): boolean;

  restart();

}
