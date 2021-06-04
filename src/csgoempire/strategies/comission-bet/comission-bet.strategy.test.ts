import ComissionBetStrategy from './comission-bet.strategy';
describe('ComissionBetStrategy', () => {
  let strategy: ComissionBetStrategy;
  beforeEach(() => {
    strategy = new ComissionBetStrategy(100, 0.005);
  });
  it('get bet amount', () => {
    expect(strategy.getBetAmount()).toBe(0.5);
  });
});
