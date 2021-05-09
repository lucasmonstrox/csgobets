import { Color } from '../typings/roulette-scrapper.typings';
import { getElement } from '../utils/element';
export default class CSGOEmpireRouletteScrapper {
  colorQuerySelectorMapper: Record<Color, string> = {
    black: '.bets-container:first-child',
    green: '.bets-container:nth-child(2)',
    red: '.bets-container:last-child',
  };
  getBetsTotalByColor(color: Color): number {
    const querySelector = this.colorQuerySelectorMapper[color];
    const betsTotalElement = getElement(querySelector);
    const match = betsTotalElement.innerText.match(
      /(?<betsTotal>\d+) Bets Total/
    );
    const didntGetBetsTotal = !match?.groups?.betsTotal;
    if (didntGetBetsTotal) {
      throw new Error('Cannot extract regex "\\d+ Bets Total" from content');
    }
    const betsTotal = +match!.groups!.betsTotal;
    return betsTotal;
  }
}
