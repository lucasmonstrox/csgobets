export enum Color {
  Black = 'black',
  Green = 'green',
  Red = 'red',
}
export interface RouletteScrapper {
  getBetsTotalByColor(color: Color): number;
  getLast100ByColor(color: Color): number;
  getPreviousRolls(): Color[];
  isRolling(): boolean;
}
