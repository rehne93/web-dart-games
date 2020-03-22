export class HalveItStep{
  value: string;
  isSpecialStep: boolean = false;


  constructor(value: string, isSpecialStep: boolean = false) {
    this.value = value;
    this.isSpecialStep = isSpecialStep;
  }
}
