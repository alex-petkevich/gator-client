export interface IRate {
  id?: number;
  name?: string;
  mark?: string;
  code?: string;
  rate?: number;
  active?: boolean;
}

export class Rate implements IRate {
  constructor(
    public id?: number,
    public name?: string,
    public mark?: string,
    public code?: string,
    public rate?: number,
    public active?: boolean
  ) {
    this.active = this.active || false;
  }
}
