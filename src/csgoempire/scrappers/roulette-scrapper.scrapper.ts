import { Color } from '../../typings/roulette-scrapper.typings';
import {
  getElement,
  getElementOrError,
  getElements,
} from '../../utils/element';
export default class RouletteScrapper {
  betsTotalQuerySelectorMapper: Record<Color, string> = {
    black: '.bets-container:first-child',
    green: '.bets-container:nth-child(2)',
    red: '.bets-container:last-child',
  };
  isRollingSelector = '.bets-container--rolling';
  last100QuerySelectorMapper: Record<Color, string> = {
    black: '.text-light-grey-1.text-xxs.font-bold.mr-2:first-child',
    green: '.text-light-grey-1.text-xxs.font-bold.mr-2:nth-child(2)',
    red: '.text-light-grey-1.text-xxs.font-bold.mr-2:last-child',
  };
  previousRollsSelector = '.previous-rolls-item > div';
  getBetsTotalByColor(color: Color): number {
    const querySelector = this.betsTotalQuerySelectorMapper[color];
    const betsTotalElement = getElementOrError(querySelector);
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
    const element = getElementOrError(querySelector);
    const last100 = +element.innerText;
    return last100;
  }
  // TODO: test it
  getPreviousRolls(): Color[] {
    const previousRollsElements = getElements(this.previousRollsSelector);
    const previousRolls = [];
    for (let i = 0; i < 10; i++) {
      const rollElement = previousRollsElements[i];
      const isBlack = rollElement.className.indexOf(`coin-ct`) > -1;
      if (isBlack) {
        previousRolls.push(Color.Black);
        continue;
      }
      const isRed = rollElement.className.indexOf(`coin-t`) > -1;
      const rollResult = isRed ? Color.Red : Color.Green;
      previousRolls.push(rollResult);
    }
    return previousRolls;
  }
  isRolling(): boolean {
    const isRolling = !!getElement(this.isRollingSelector);
    return isRolling;
  }
}
