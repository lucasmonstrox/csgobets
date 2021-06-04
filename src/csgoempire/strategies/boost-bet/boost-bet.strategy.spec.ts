import BoostBetStrategy from './boost-bet.strategy';
describe('BoostBetStrategy', () => {
  let strategy: BoostBetStrategy;
  beforeEach(() => {
    strategy = new BoostBetStrategy(100, 0.25);
  });
  it('get bet amount', () => {
    expect(strategy.getBetAmount()).toBe(25);
  });
});
