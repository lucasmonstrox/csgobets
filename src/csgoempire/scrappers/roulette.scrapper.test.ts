import { mocked } from 'ts-jest/utils';
import { Color } from '../../typings/roulette-scrapper.typings';
import { getElement, getElementOrError } from '../../utils/element';
import RouletteScrapper from './roulette.scrapper';
jest.mock('../../utils/element');
describe('RouletteScrapper', () => {
  let scrapper: RouletteScrapper;
  beforeEach(() => {
    scrapper = new RouletteScrapper();
  });
  describe('getBetsTotalByColor', () => {
    it('should throw exception when cannot get bets total', () => {
      const mockedGetElementOrError = mocked(getElementOrError);
      mockedGetElementOrError.mockImplementationOnce(
        () => ({ innerText: '' } as HTMLElement)
      );
      expect(() => scrapper.getBetsTotalByColor(Color.Black)).toThrow(
        'Cannot extract regex "\\d+ Bets Total" from content'
      );
    });
    it('should get bets total', () => {
      const mockedGetElementOrError = mocked(getElementOrError);
      mockedGetElementOrError.mockImplementationOnce(
        () => ({ innerText: '10 Bets Total' } as HTMLElement)
      );
      expect(scrapper.getBetsTotalByColor(Color.Black)).toBe(10);
    });
  });
  describe('getLast100ByColor', () => {
    it('should get last 100', () => {
      const mockedGetElementOrError = mocked(getElementOrError);
      mockedGetElementOrError.mockImplementationOnce(
        () => ({ innerText: '47' } as HTMLElement)
      );
      expect(scrapper.getLast100ByColor(Color.Black)).toBe(47);
    });
  });
  describe('isRolling', () => {
    it('should not be rolling', () => {
      const mockedGetElement = mocked(getElement);
      mockedGetElement.mockImplementationOnce(() => null);
      expect(scrapper.isRolling()).toBe(false);
    });
    it('should not be rolling', () => {
      const mockedGetElement = mocked(getElement);
      mockedGetElement.mockImplementationOnce(() => ({} as HTMLElement));
      expect(scrapper.isRolling()).toBe(true);
    });
  });
});
