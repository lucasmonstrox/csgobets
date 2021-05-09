import { Color } from '../typings/roulette-scrapper.typings';
import { getElement } from '../utils/element';
export default class CSGOEmpireRouletteScrapper {
  betsTotalQuerySelectorMapper: Record<Color, string> = {
    black: '.bets-container:first-child',
    green: '.bets-container:nth-child(2)',
    red: '.bets-container:last-child',
  };
  last100QuerySelectorMapper: Record<Color, string> = {
    black: '.text-light-grey-1.text-xxs.font-bold.mr-2:first-child',
    green: '.text-light-grey-1.text-xxs.font-bold.mr-2:nth-child(2)',
    red: '.text-light-grey-1.text-xxs.font-bold.mr-2:last-child',
  };
  getBetsTotalByColor(color: Color): number {
    const querySelector = this.betsTotalQuerySelectorMapper[color];
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
  getLast100ByColor(color: Color): number {
    const querySelector = this.last100QuerySelectorMapper[color];
    const element = getElement(querySelector);
    const last100 = +element.innerText;
    return last100;
  }
}
